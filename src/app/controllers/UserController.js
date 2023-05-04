const Account = require('../models/Account');
const User = require('../models/User');
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
        Account.findOne({ username: req.body.username })
            .then(account => {
                if (account) {
                    account.validatePassword(req.body.password, (err, match) => {
                        if (match) {
                            req.session.username = account.username;
                            res.redirect('/profile');
                        }
                        else {
                            res.redirect('back');
                        }
                    });
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
                    req.session.username = account.username;
                    
                    const user = new User();
                    user.username = account.username;
                    // Character.findOne({ name: "default" })
                    //     .then(character => {
                    //         user.avatar = character.image;
                    //     })
                    //     .catch(next);

                    Promise.all([user.save(), account.save()])
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