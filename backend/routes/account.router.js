const router = require('express').Router();

const AccountController = require('../controllers/account.controller');

//Get a list of all Accounts
router.get('/', AccountController.getAllAccounts);

//Get a Account by UserID
router.get('/:id', AccountController.findAccountById);

//Update a Account by UserID
router.patch('/:id', AccountController.updateAccount);

//Lock a Account by UserID
router.patch('/lock/:id', AccountController.lockAccount);

//Unlock a Account by UserID
router.patch('/unlock/:id', AccountController.unlockAccount);

module.exports = router;
