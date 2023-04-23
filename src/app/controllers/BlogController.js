// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class BlogController {

    // [GET] /blog
    index(req, res, next) {
        res.render('user/blog', {
            title: "Blog chia sẻ |",
            user: req.session.username,
        });
    }
    
}

module.exports = new BlogController;