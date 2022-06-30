const Account = require('../models/account.model');

module.exports = {
    getAllAccounts: async (req, res, next) => {
        try {
            const results = await Account.find();

            var length = Object.keys(results).length;

            if (!length) {
                return res.status(404).json('No accounts found!');
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
                return res.status(404).json('Account does not exist!');
            }

            res.send(result);
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    createNewAccount: async (req, res, next) => {
        try {
            const userID = req.body.UserID;
            const phoneNumber = req.body.PhoneNumber;
            const name = req.body.Name;
            const email = req.body.Email;
            const address = req.body.Address;
            const isActive = req.body.IsActive;
            const level = req.body.Level;
            const password = req.body.Password;
            const dob = req.body.DoB;

            const newAccount = new Account({
                UserID: userID,
                PhoneNumber: phoneNumber,
                Name: name,
                Email: email,
                Address: address,
                IsActive: isActive,
                Level: level,
                Password: password,
                DoB: dob,
            });

            const result = await newAccount.save();
            res.send(result);
        } catch (error) {
            res.status(422).json('Validation Error ' + error.message);
            next();
        }
    },

    updateAccount: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;

            const result = await Account.findOneAndUpdate(
                { UserID: id },
                updates
            );

            if (!result) {
                return res.status(404).json('Account does not exist!');
            }

            res.send('Updated!!');
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    lockAccount: async (req, res, next) => {
        const id = req.params.id;

        try {
            const result = await Account.findOneAndUpdate(
                { UserID: id },
                { IsActive: false }
            );

            if (!result) {
                return res.status(404).json('Account does not exist!');
            }

            res.send(`Locked the Account: ${id} !!`);
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    unlockAccount: async (req, res, next) => {
        const id = req.params.id;

        try {
            const result = await Account.findOneAndUpdate(
                { UserID: id },
                { IsActive: true }
            );

            if (!result) {
                return res.status(404).json('Account does not exist!');
            }

            res.send(`Activated the account: ${id} !!`);
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },
};
