const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Account = require('../models/account.model');

const authController = {
    registerUser: async (req, res, next) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.Password, salt);

            const newAccount = new Account({
                PhoneNumber: req.body.PhoneNumber,
                Name: req.body.Name,
                Email: req.body.Email,
                Address: req.body.Address,
                IsActive: req.body.IsActive,
                Level: req.body.Level,
                Password: hashed,
                DoB: req.body.DoB,
            });

            const result = await newAccount.save();

            return res.status(200).send({
                success: true,
                account: {
                    ID: result._id,
                    PhoneNumber: result.PhoneNumber,
                    Name: result.Name,
                    Email: result.Email,
                    IsActive: result.IsActive,
                    Level: result.Level,
                    Password: result.Password,
                },
            });
        } catch (error) {
            res.status(422).json({ status: 422, error: error.message });
            next();
        }
    },

    loginUser: async (req, res, next) => {
        try {
            const { username, password } = req.body;

            var user = null;

            if (username.includes('@')) {
                user = await Account.findOne({ Email: username });
            } else {
                user = await Account.findOne({ PhoneNumber: username });
            }

            if (!user) {
                return res.status(404).send({
                    success: false,
                    type: 'username',
                    error: 'Không tìm thấy tài khoản phù hợp',
                });
            }

            const isMatch = await bcrypt.compare(password, user.Password);
            if (!isMatch) {
                return res.status(404).send({
                    success: false,
                    type: 'password',
                    error: 'Mật khẩu chưa chính xác',
                });
            }

            if (user && isMatch) {
                const accessToken = jwt.sign(
                    {
                        id: user._id,
                        role: user.Level,
                    },
                    process.env.JWT_ACCESS_KEY,
                    { expiresIn: '365d' }
                );
                const { Password, ...orthers } = user._doc;
                res.status(200).send({
                    success: true,
                    accessToken: accessToken,
                    account: { ...orthers },
                });
            }
        } catch (error) {
            res.status(400).send({
                error: error.message,
            });
            next();
        }
    },
};

module.exports = authController;
