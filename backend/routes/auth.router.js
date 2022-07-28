const router = require('express').Router();

const AuthController = require('../controllers/auth.controller');

//register
router.post('/register', AuthController.registerUser);

//login
router.post('/login', AuthController.loginUser);

module.exports = router;
