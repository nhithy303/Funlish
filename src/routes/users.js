const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/signin', userController.signin);
router.post('/signin', userController.psignin);
router.get('/signup', userController.signup);
router.post('/signup', userController.psignup);
router.get('/signout', userController.signout);
router.put('/password/:username', userController.changePassword);

module.exports = router;