// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class PlayController {

    // [GET] /play
    index(req, res, next) {
        res.render('user/play/play', {
            user: req.session.username,
        });
    }

    // [GET] /play/matching-game
    matchingGame(req, res, next) {
        res.render('user/play/matching-game', {
            user: req.session.username,
        });
    }
    
}

module.exports = new PlayController;