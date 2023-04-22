const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/BlogController');

router.get('/', blogController.index);

module.exports = router;