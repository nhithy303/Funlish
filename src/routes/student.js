const express = require('express');
const router = express.Router();

const studentController = require('../app/controllers/StudentController');

router.get('/dashboard', studentController.dashboard);
router.put('/avatar/:id', studentController.editAvatar);
router.get('/my-course', studentController.mycourse);
router.put('/register-course/:username', studentController.registerCourse);
router.get('/settings', studentController.settings);

module.exports = router;