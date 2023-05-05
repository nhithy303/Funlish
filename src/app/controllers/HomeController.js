// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class HomeController {

    // [GET] /home
    index(req, res, next) {
        res.render('user/home', {
            student: req.session.username,
        });
    }
    
}

module.exports = new HomeController;