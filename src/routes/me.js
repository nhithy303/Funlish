const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/profile', MeController.profile);
router.put('/profile/:username', MeController.editAvatar);
router.get('/my-course', MeController.mycourse);
router.get('/settings', MeController.settings);

module.exports = router;