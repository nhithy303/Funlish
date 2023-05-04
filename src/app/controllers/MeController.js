const Account = require('../models/Account');
const User = require('../models/User');
const Character = require('../models/Character');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class MeController {

    // [GET] /profile
    profile(req, res, next) {
        if (req.session.username) {
            Promise.all([
                User.findOne({ username: req.session.username }),
                Character.find({ name: { $nin: ['default'] } })
            ])
                .then(([user, characters]) =>
                    res.render('user/me/profile', {
                        title: "Tài khoản |",
                        active: "profile",
                        user: mongooseToObject(user),
                        characters: multipleMongooseToObject(characters),
                    }),
                )
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }

    // [PUT] /profile/:username
    editAvatar(req, res, next) {
        User.updateOne({ username: req.params.username }, { avatar: req.body.character })
            .then(() => {
                res.redirect('back')
            })
            .catch(next);
    }

    // [GET] /my-course
    mycourse(req, res, next) {
        if (req.session.username) {
            res.render('user/me/my-course', {
                title: "Khóa học của bé |",
                user: req.session.username,
                active: "my-course",
            })
        }
        else {
            res.redirect('/signin');
        }
    }

    // [GET] /settings
    settings(req, res, next) {
        if (req.session.username) {
            res.render('user/me/settings', {
                title: "Cài đặt |",
                user: req.session.username,
                active: "settings",
            })
        }
        else {
            res.redirect('/signin');
        }
    }
    
}

module.exports = new MeController;