const User = require('../models/User');
const Student = require('../models/Student');
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
            res.redirect('/dashboard');
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
                            res.redirect('/dashboard');
                        }
                        else {
                            res.render('user/signin', {
                                title: "Đăng nhập |",
                                failed: true,
                            });
                        }
                    });
                }
                else {
                    res.render('user/signin', {
                        title: "Đăng nhập |",
                        failed: true,
                    });
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
            res.redirect('/dashboard');
        }
    }

    // [POST] /signup
    psignup(req, res, next) {
        User.findOne({ username: req.body.username })
            .then(existedUser => {
                if (!existedUser) {
                    const newUser = new User({
                        username: req.body.username,
                        password: req.body.password,
                    });
                    req.session.username = newUser.username;
                    
                    const student = new Student({
                        username: newUser.username,
                    });

                    Promise.all([student.save(), newUser.save()])
                        .then(() => res.redirect('/dashboard'))
                        .catch(next);
                }
                else {
                    res.render('user/signup', {
                        title: "Đăng ký |",
                        failed: true,
                    });
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