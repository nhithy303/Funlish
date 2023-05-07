const express = require('express');
const router = express.Router();

const playController = require('../app/controllers/PlayController');

router.get('/', playController.index);
router.get('/matching-game', playController.matchingGame);
router.get('/matching-game/:slug', playController.matchingGamePlay);
router.get('/word-guessing-game', playController.wordGuessingGame);

module.exports = router;