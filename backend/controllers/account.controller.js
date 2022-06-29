const mongoose = require('mongoose');
const createError = require('http-errors');

const Account = require('../models/account.model');

module.exports = {
    getAllAccounts: async (req, res, next) => {
        try {
            const results = await Account.find();

            if (!results) {
                throw createError(404, 'Accounts are not found.');
            }

            res.send(results);
        } catch (error) {
            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
        }
    },

    findAccountById: async (req, res, next) => {
        const id = req.params.id;
        try {
            const result = await Account.find({ UserID: id });
            if (!result) {
                throw createError(404, 'Account does not exist.');
            }
            res.send(result);
        } catch (error) {
            if (error instanceof mongoose.CastError) {
                return next(createError(400, 'Invalid Account id'));
            }

            next(error);
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
            if (error.name === 'ValidationError') {
                return next(createError(422, error.message));
            }

            next(error);
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
                throw createError(404, 'Account does not exist');
            }
            res.send('Updated!!');
        } catch (error) {
            console.log(error.message);

            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
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
                throw createError(404, 'Account does not exist');
            }
            res.send(`Locked the Account: ${id} !!`);
        } catch (error) {
            console.log(error.message);

            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
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
                throw createError(404, 'Account does not exist');
            }
            res.send(`Activated the account: ${id} !!`);
        } catch (error) {
            console.log(error.message);

            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
        }
    },
};
