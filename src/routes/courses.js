const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.put('/lessons/:id', courseController.updateLessons);
router.get('/lessons/:lessonId', courseController.learn);
router.post('/:id/lessons/create', courseController.createLessons);
router.get('/:id/lessons', courseController.lessons);
router.post('/create', courseController.createCourses);
router.put('/:id', courseController.updateCourses);
router.get('/:slug', courseController.detail);
router.get('/', courseController.index);
// router.put('/:id/lessons/update', courseController.updateLessons)

module.exports = router;