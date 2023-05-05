const express = require('express');
const router = express.Router();

const StudentController = require('../app/controllers/StudentController');

router.get('/profile', StudentController.profile);
router.put('/profile/:username', StudentController.editAvatar);
router.get('/my-course', StudentController.mycourse);
router.get('/settings', StudentController.settings);

module.exports = router;