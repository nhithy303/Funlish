const Course = require('../models/Course');
const Lesson = require('../models/Lesson');
const MatchingGame = require('../models/MatchingGame');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class AdminController {

    // [GET] /admin
    index(req, res, next) {
        if (req.session.admin) {
            res.render('admin/dashboard', {
                layout: 'admin',
            })
        }
        else {
            res.redirect('/admin/signin');
        }
    }

    // [GET] /admin/home
    home(req, res, next) {
        if (req.session.admin) {
            res.render('admin/home', {
                layout: 'admin',
            })
        }
        else {
            res.redirect('/admin/signin');
        }
    }

    // [GET] /admin/courses
    courses(req, res, next) {
        if (req.session.admin) {
            Course.find({})
                .then(courses => {
                    res.render('admin/courses', {
                        layout: 'admin',
                        courses: multipleMongooseToObject(courses),
                    });
                })
                .catch(next);
        }
        else {
            res.redirect('/admin/signin');
        }
    }

    // [GET] /admin/courses/create
    createCourses(req, res, next) {
        if (req.session.admin) {
            res.render('admin/courses-create', {
                layout: 'admin',
            });
        }
        else {
            res.redirect('/admin/signin');
        }
        
    }

    // [GET] /admin/courses/update/:id
    updateCourses(req, res, next) {
        if (req.session.admin) {
            Promise.all([Course.findById({ _id: req.params.id }), Lesson.find({ courseId: req.params.id })])
                .then(([course, lessons]) =>
                    res.render('admin/courses-update', {
                        layout: 'admin',
                        course: mongooseToObject(course),
                        lessons: multipleMongooseToObject(lessons),
                    }),
                )
                .catch(next);
        }
        else {
            res.redirect('/admin/signin');
        }
        
    }

    // [GET] /admin/courses/:id/lessons/create
    createLessons(req, res, next) {
        if (req.session.admin) {
            res.render('admin/lessons-create', {
                layout: 'admin',
                courseId: req.params.id,
            });
        }
        else {
            res.redirect('/admin/signin');
        }
        
    }

    // [GET] /admin/courses/:courseId/lessons/:lessonId/update
    updateLessons(req, res, next) {
        if (req.session.admin) {
            Lesson.findById({ _id: lessonId })
                .then(lesson => {
                    res.render('admin/lessons-update', {
                        layout: 'admin',
                        courseId: req.params.courseId,
                        lesson: mongooseToObject(lesson),
                    });
                })
                .catch(next);
        }
        else {
            res.redirect('/admin/signin');
        }
        
    }

    // [GET] /admin/play
    play(req, res, next) {
        if (req.session.admin) {
            // res.render('admin/play', {
            //     layout: 'admin',
            // })
            MatchingGame.find({ topic: { $nin: ['default'] } })
                .then(matchinggames =>
                    res.render('admin/play', {
                        layout: 'admin',
                        matchinggames: multipleMongooseToObject(matchinggames),
                    })
                )
                .catch(next);
        }
        else {
            res.redirect('/admin/signin');
        }
    }

    // admin/play/matching-game/cards/:topic
    addMatchingGameCards(req, res, next) {
        if (req.session.admin) {
            res.render('admin/matching-game-update', {
                layout: 'admin',
                topic: req.params.topic,
            });
        }
        else {
            res.redirect('/admin/signin');
        }
    }

    // [GET] /admin/blog
    blog(req, res, next) {
        if (req.session.admin) {
            res.render('admin/blog', {
                layout: 'admin',
            })
        }
        else {
            res.redirect('/admin/signin');
        }
    }

    // [GET] /admin/about
    about(req, res, next) {
        if (req.session.admin) {
            res.render('admin/about', {
                layout: 'admin',
            })
        }
        else {
            res.redirect('/admin/signin');
        }
    }

    // [GET] /admin/contact
    contact(req, res, next) {
        if (req.session.admin) {
            res.render('admin/contact', {
                layout: 'admin',
            })
        }
        else {
            res.redirect('/admin/signin');
        }
    }

    // [GET] /admin/signin
    signin(req, res, next) {
        if (!req.session.admin) {
            res.render('admin/signin', {
                layout: 'admin',
                signin: true,
            });
        }
        else {
            res.redirect('/admin');
        }
    }

    // [POST] /admin/signin
    psignin(req, res, next) {
        if (req.body.username === 'admin' && req.body.password === 'funlish47') {
            delete req.session.username;
            req.session.admin = 'admin';
            res.redirect('/admin');
        }
        else {
            res.render('admin/signin', {
                layout: 'admin',
                signin: true,
                failed: true,
            });
        }
    }

    // [GET] /admin/signout
    signout(req, res, next) {
        delete req.session.admin;
        res.redirect('/admin/signin')
    }
    
}

module.exports = new AdminController;