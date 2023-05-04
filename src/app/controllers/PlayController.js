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
        // res.render('user/play/matching-game', {
        //     user: req.session.username,
        // });
        MatchingGame.findOne({ topic: 'animal' })
            .then(matchinggame =>
                res.render('user/play/matching-game', {
                    title: "Matching Game |",
                    user: req.session.username,
                    matchinggame: mongooseToObject(matchinggame),
                }),
            )
            .catch(next);
    }
    
}

module.exports = new PlayController;