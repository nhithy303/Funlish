const MatchingGame = require('../models/MatchingGame');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class PlayController {

    // [GET] /play
    index(req, res, next) {
        res.render('user/play/play', {
            title: "Chơi mà học |",
            student: req.session.username,
        });
    }

    // [GET] /play/matching-game
    matchingGame(req, res, next) {
        MatchingGame.find({ topic: { $nin: ['default'] } })
            .then(matchinggames =>
                res.render('user/play/matching-game', {
                    title: "Matching Game |",
                    student: req.session.username,
                    matchinggames: multipleMongooseToObject(matchinggames),
                }),
            )
            .catch(next);
    }

    // [GET] /play/matching-game/:slug
    matchingGamePlay(req, res, next) {
        Promise.all([MatchingGame.findOne({ topic: req.params.slug }), MatchingGame.findOne({ topic: 'default'})])
            .then(([matchinggame, defaultcard]) =>
                res.render('user/play/matching-game-play', {
                    title: "Matching Game |",
                    student: req.session.username,
                    matchinggame: mongooseToObject(matchinggame),
                    defaultcard: mongooseToObject(defaultcard),
                }),
            )
            .catch(next);
    }
    
}

module.exports = new PlayController;