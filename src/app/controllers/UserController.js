const Account = require('../models/Account');
const User = require('../models/User');
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
        Account.findOne({ username: req.body.username })
            .then(account => {
                if (account && req.body.password === account.password) {
                    req.session.username = account.username;
                    res.redirect('/profile');
                }
                else {
                    res.redirect('back');
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
        Account.findOne({ username: req.body.username })
            .then(user => {
                if (!user) {
                    const account = new Account();
                    account.username = req.body.username;
                    account.password = req.body.password;
                    const user = new User();
                    user.username = account.username;
                    req.session.username = account.username;
                    Promise.all([user.save(), account.save()])
                        .then(() => res.redirect('/profile'))
                        .catch(next);
                }
                else {
                    res.redirect('/signup');
                }
            })
            .catch(next);
    }

    // [GET] /profile/:slug
    profile(req, res, next) {
        if (req.session.username) {
            User.findOne({ username: req.session.username })
                .then(user =>
                    res.render('user/profile', {
                        title: "Tài khoản |",
                        user: mongooseToObject(user),
                        active: "profile",
                    }),
                )
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }

    // [GET] /signout
    signout(req, res, next) {
        req.session.destroy();
        res.redirect('back');
    }

    // [GET] /my-course
    mycourse(req, res, next) {
        if (req.session.username) {
            res.render('user/my-course', {
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
            res.render('user/settings', {
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

module.exports = new UserController;