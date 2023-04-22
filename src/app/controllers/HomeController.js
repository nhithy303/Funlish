// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class HomeController {
    // [GET] /home
    index(req, res, next) {
        res.render('user/home');
    }
}

module.exports = new HomeController;