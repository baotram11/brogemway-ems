const router = require('express').Router();

let Account = require('../models/account.model');

router.route('/').get((req, res) => {
    Account.find()
        .then((accounts) => res.json(accounts))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const phoneNumber = req.body.PhoneNumber;
    const name = req.body.Name;
    const email = req.body.Email;
    const address = req.body.Address;
    const dob = req.body.DoB;

    const newAccount = new Account({
        PhoneNumber: phoneNumber,
        Name: name,
        Email: email,
        Address: address,
        DoB: dob,
    });

    newAccount
        .save()
        .then(() => res.json('New Account added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
