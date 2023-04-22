// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class BlogController {
    // [GET] /blog
    index(req, res, next) {
        res.render('user/blog');
    }
}

module.exports = new BlogController;