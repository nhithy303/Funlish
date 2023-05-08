// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class AboutController {

    // [GET] /about
    index(req, res, next) {
        res.render('user/about', {
            title: "Về chúng tôi |",
            student: req.session.username,
        });
    }

    // [GET] /about/tran-hoang-yen-nhi
    tranhoangyennhi(req, res, next) {
        res.render('members/tranhoangyennhi', { layout: false });
    }
    
    // [GET] /about/le-duc-trong
    leductrong(req, res, next) {
        res.render('members/leductrong', { layout: false });
    }

    // [GET] /about/le-duy-duc
    leduyduc(req, res, next) {
        res.render('members/leduyduc', { layout: false });
    }

    // [GET] /about/le-phu-nhan
    lephunhan(req, res, next) {
        res.render('members/lephunhan', { layout: false });
    }

    // [GET] /about/luu-anh-dung
    luuanhdung(req, res, next) {
        res.render('members/luuanhdung', { layout: false });
    }
}

module.exports = new AboutController;