const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/', courseController.index);
router.get('/:slug', courseController.detail);
router.get('/learn/:id', courseController.learn);
router.post('/create', courseController.createCourses);
router.post('/:id/lessons/create', courseController.createLessons);
router.put('/:id', courseController.updateCourses);
// router.put('/:id/lessons/create', courseController.updateLessons)

module.exports = router;