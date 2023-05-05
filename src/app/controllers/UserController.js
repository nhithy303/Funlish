const User = require('../models/User');
const Student = require('../models/Student');
const Character = require('../models/Character');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class UserController {
    
    // [GET] /signin
    signin(req, res, next) {
        if (!req.session.username) {
            res.render('user/signin', {
                title: "Đăng nhập |",
            });
        }
        else {
            res.redirect('/profile');
        }
    }

    // [POST] /signin
    psignin(req, res, next) {
        User.findOne({ username: req.body.username })
            .then(user => {
                if (user) {
                    user.validatePassword(req.body.password, (err, match) => {
                        if (match) {
                            req.session.username = user.username;
                            res.redirect('/profile');
                        }
                        else {
                            res.redirect('/signin');
                        }
                    });
                }
                else {
                    res.redirect('/signin');
                }
            })
            .catch(next);
    }

    // [GET] /signup
    signup(req, res, next) {
        if (!req.session.username) {
            res.render('user/signup', {
                title: "Đăng ký |",
            });
        }
        else {
            res.redirect('/profile');
        }
    }

    // [POST] /signup
    psignup(req, res, next) {
        User.findOne({ username: req.body.username })
            .then(existedUser => {
                if (!existedUser) {
                    const newUser = new User();
                    newUser.username = req.body.username;
                    newUser.password = req.body.password;
                    req.session.username = newUser.username;
                    
                    const student = new Student();
                    student.username = newUser.username;
                    Character.findOne({ name: "default" })
                        .then(character => {
                            student.avatar = character.image;
                        })
                        .catch(next);

                    Promise.all([student.save(), newUser.save()])
                        .then(() => res.redirect('/profile'))
                        .catch(next => res.send(next));
                }
                else {
                    res.redirect('/signup');
                }
            })
            .catch(next);
    }

    // [GET] /signout
    signout(req, res, next) {
        req.session.destroy();
        res.redirect('back');
    }
    
}

module.exports = new UserController;