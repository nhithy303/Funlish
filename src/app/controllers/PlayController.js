const MatchingGame = require('../models/MatchingGame');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class PlayController {

    // [GET] /play
    index(req, res, next) {
        res.render('user/play/play', {
            title: "Chơi mà học |",
            user: req.session.username,
        });
    }

    // [GET] /play/matching-game
    matchingGame(req, res, next) {
        MatchingGame.find({})
            .then(matchinggames =>
                res.render('user/play/matching-game', {
                    title: "Matching Game |",
                    user: req.session.username,
                    matchinggames: multipleMongooseToObject(matchinggames),
                }),
            )
            .catch(next);
    }

    // [GET] /play/matching-game/:slug
    matchingGamePlay(req, res, next) {
        MatchingGame.findOne({ topic: req.params.slug })
            .then(matchinggame =>
                res.render('user/play/matching-game-play', {
                    title: "Matching Game |",
                    user: req.session.username,
                    matchinggame: mongooseToObject(matchinggame),
                }),
            )
            .catch(next);
    }
    
}

module.exports = new PlayController;