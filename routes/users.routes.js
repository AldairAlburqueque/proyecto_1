const express = require('express');

const validations = require('../middlewares/validations.middleware');

const userController = require('../controller/user.controller');
const User = require('../models/users.model');

const router = express.Router();

router.post('/signup', validations.createUserValidation, userController.signup);

router.post('/login', userController.login);

module.exports = router;
