// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class ContactController {
    // [GET] /contact
    index(req, res, next) {
        res.render('user/contact');
    }
}

module.exports = new ContactController;