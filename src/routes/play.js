const express = require('express');
const router = express.Router();

const playController = require('../app/controllers/PlayController');

router.get('/', playController.index);
router.get('/matching-game', playController.matchingGame);
router.get('/matching-game/:slug', playController.matchingGamePlay);
router.post('/matching-game/create', playController.createMatchingGameTopic);
router.put('/matching-game/:topic/add-card', playController.addMatchingGameCards);
router.post('/word-guessing-game/create', playController.createWords);
router.get('/word-guessing-game', playController.wordGuessingGame);

module.exports = router;