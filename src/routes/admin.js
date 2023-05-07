const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/home', adminController.home);
router.get('/courses', adminController.courses);
router.get('/courses/create', adminController.createCourses);
router.get('/courses/update/:id', adminController.updateCourses);
router.get('/courses/:id/lessons/create', adminController.createLessons);
router.get('/courses/:courseId/lessons/:lessonId/update', adminController.updateLessons);
router.get('/play', adminController.play);
router.get('/blog', adminController.blog);
router.get('/about', adminController.about);
router.get('/contact', adminController.contact);
router.post('/signin', adminController.psignin);
router.get('/signin', adminController.signin);
router.get('/signout', adminController.signout);
router.get('/', adminController.index);

module.exports = router;