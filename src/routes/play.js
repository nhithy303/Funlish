const express = require('express');
const router = express.Router();

const playController = require('../app/controllers/PlayController');

router.get('/', playController.index);
router.get('/matching-game', playController.matchingGame);

module.exports = router;