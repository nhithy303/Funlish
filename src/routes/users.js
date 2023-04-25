const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/signin', userController.signin);
router.post('/signin', userController.psignin);
router.get('/signup', userController.signup);
router.post('/signup', userController.psignup);
router.get('/profile', userController.profile);
router.put('/profile/:username', userController.editAvatar);
router.get('/signout', userController.signout);
router.get('/my-course', userController.mycourse);
router.get('/settings', userController.settings);

module.exports = router;