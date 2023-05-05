const express = require('express');
const router = express.Router();

const studentController = require('../app/controllers/StudentController');

router.get('/profile', studentController.profile);
router.put('/profile/:username', studentController.editAvatar);
router.get('/my-course', studentController.mycourse);
router.put('/:username/:courseId', studentController.registerCourse);
router.get('/settings', studentController.settings);

module.exports = router;