// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class AdminController {

    // [GET] /admin
    index(req, res, next) {
        res.render('admin/admin', { layout: 'admin' });
    }
    
}

module.exports = new AdminController;