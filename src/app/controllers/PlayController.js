const MatchingGame = require('../models/MatchingGame');
const WordGuessingGame = require('../models/WordGuessingGame');
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

    // [POST] /play/matching-game/create
    createMatchingGameTopic(req, res, next) {
        const matchinggame = new MatchingGame(req.body);
        matchinggame.save()
            .then(() => res.redirect('/admin/play'))
            .catch(next);
    }

    // [PUT] /play/matching-game/:topic/add-card
    addMatchingGameCards(req, res, next) {
        MatchingGame.updateOne({ topic: req.params.topic },
            {
                $push: { cards: {
                    word: req.body.word,
                    picture: req.body.picture,
                } }
            })
            .then(() => res.redirect(`/admin/play/matching-game/cards/${req.params.topic}`))
            .catch(next);
    }

    // [GET] /play/word-guessing-game
    wordGuessingGame(req, res, next) {
        WordGuessingGame.find({})
            .then(words =>
                res.render('user/play/word-guessing-game', {
                    layout: 'game',
                    words: multipleMongooseToObject(words),
                })
            )
            .catch(next);
    }
    
    // [POST] /play/word-guessing-game/create
    createWords(req, res, next) {
        const words = new WordGuessingGame({
            enword: req.body.enword,
            viword: req.body.viword,
        });
        words.save()
            .then(() => res.redirect('/admin/play'))
            .catch(next);
    }
    
}

module.exports = new PlayController;