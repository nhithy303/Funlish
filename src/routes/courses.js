const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/', courseController.index);
router.get('/:slug', courseController.detail);
router.get('/learn/:id', courseController.learn);

module.exports = router;