const Course = require('../models/Course');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const Lesson = require('../models/Lesson');

class CourseController {

    // [GET] /courses
    index(req, res, next) {
        Course.find({})
            .then(courses =>
                res.render('user/courses/courses', {
                    title: "Khóa học |",
                    student: req.session.username,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [GET] /courses/:slug
    detail(req, res, next) {
        Promise.all([Course.findOne({ slug: req.params.slug }), Course.find({})])
            .then(([course, courses]) =>
                res.render('user/courses/detail', {
                    title: `${course.name} |`,
                    student: req.session.username,
                    course: mongooseToObject(course),
                    courses: multipleMongooseToObject(courses),
                    active: req.params.slug,
                }),
            )
            .catch(next);
    }

    // [GET] /courses/learn/:id
    learn(req, res, next) {
        if (req.session.username) {
            Course.findOne({ _id: req.params.id })
                .then(course =>
                    res.render('user/courses/learn', {
                        title: `Học ${course.name} |`,
                        student: req.session.username,
                        course: mongooseToObject(course),
                    }),
                )
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }
}

module.exports = new CourseController;