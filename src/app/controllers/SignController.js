// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class SignController {
    
    // [GET] /signin
    signin(req, res, next) {
        res.render('user/signin');
    }

    // [GET] /signup
    signup(req, res, next) {
        res.render('user/signup');
    }
    
}

module.exports = new SignController;