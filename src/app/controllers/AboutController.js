// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class AboutController {
    // [GET] /about
    index(req, res, next) {
        res.render('user/about');
    }
}

module.exports = new AboutController;