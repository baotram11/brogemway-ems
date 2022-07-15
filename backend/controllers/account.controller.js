const bcrypt = require('bcrypt');

const Account = require('../models/account.model');

module.exports = {
    getAllAccounts: async (req, res, next) => {
        try {
            const results = await Account.find();

            var length = Object.keys(results).length;

            if (!length) {
                return res.status(404).json({ error: 'No accounts found!' });
            }
            res.send(results);
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    findAccountById: async (req, res, next) => {
        const id = req.params.id;
        try {
            const result = await Account.find({ UserID: id });

            var length = Object.keys(result).length;

            if (!length) {
                return res.status(404).json({ error: 'Account does not exist!' });
            }

            res.send(result);
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    createNewAccount: async (req, res, next) => {
        try {
            const phoneNumber = req.body.PhoneNumber;
            const name = req.body.Name;
            const email = req.body.Email;
            const address = req.body.Address;
            const isActive = req.body.IsActive;
            const level = req.body.Level;
            const rawPassword = req.body.Password;
            const dob = req.body.DoB;

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(rawPassword, salt);

            const newAccount = new Account({
                PhoneNumber: phoneNumber,
                Name: name,
                Email: email,
                Address: address,
                IsActive: isActive,
                Level: level,
                Password: hash,
                DoB: dob,
            });

            const result = await newAccount.save();
            res.send(result);
        } catch (error) {
            res.status(422).json({ status: 422, error: error.message });
            next();
        }
    },

    loginAccount: async (req, res, next) => {
        try {
            const { username, password } = req.body;

            var user = null;

            if (username.includes('@')) {
                user = await Account.findOne({ Email: username });
            } else {
                user = await Account.findOne({ PhoneNumber: username });
            }

            const isMatch = await bcrypt.compare(password, user.Password);
            if (!isMatch) {
                return res.status(400).json({
                    success: false,
                    error: 'Mật khẩu chưa chính xác',
                });
            }

            if (!user) {
                return res.status(400).send({ error: 'Không tìm thấy tài khoản phù hợp' });
            }

            return res.status(200).json({
                success: true,
                account: {
                    PhoneNumber: user.PhoneNumber,
                    Name: user.Name,
                    Email: user.Email,
                    IsActive: user.IsActive,
                    Level: user.Level,
                    Password: user.Password,
                },
            });
        } catch (error) {
            res.status(400).json({
                error: 'Yêu cầu của bạn không thể được xử lý. Vui lòng thử lại.',
            });
            next();
        }
    },

    updateAccount: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;

            const result = await Account.findByIdAndUpdate(id, updates);

            if (!result) {
                return res.status(404).json({ error: 'Account does not exist!' });
            }

            res.send({ status: 'updated' });
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },

    lockAccount: async (req, res, next) => {
        const id = req.params.id;

        try {
            const result = await Account.findByIdAndUpdate(id, { IsActive: false });

            if (!result) {
                return res.status(404).json({ error: 'Account does not exist!' });
            }

            res.send(`Locked the Account: ${id} !!`);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },

    unlockAccount: async (req, res, next) => {
        const id = req.params.id;

        try {
            const result = await Account.findByIdAndUpdate(id, { IsActive: true });

            if (!result) {
                return res.status(404).json({ error: 'Account does not exist!' });
            }

            res.send(`Activated the account: ${id} !!`);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },
};
