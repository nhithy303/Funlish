const express = require('express');
const router = express.Router();

const signController = require('../app/controllers/SignController');

router.get('/signin', signController.signin);
router.get('/signup', signController.signup);

module.exports = router;