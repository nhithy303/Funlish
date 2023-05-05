const User = require('../models/User');
const Student = require('../models/Student');
const Character = require('../models/Character');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class StudentController {

    // [GET] /profile
    profile(req, res, next) {
        if (req.session.username) {
            Promise.all([
                Student.findOne({ username: req.session.username }),
                Character.find({ name: { $nin: ['default'] } })
            ])
                .then(([student, characters]) =>
                    res.render('user/student/profile', {
                        title: "Tài khoản |",
                        active: "profile",
                        student: mongooseToObject(student),
                        characters: multipleMongooseToObject(characters),
                    }),
                )
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }

    // [PUT] /profile/:username
    editAvatar(req, res, next) {
        Student.updateOne({ username: req.params.username }, { avatar: req.body.character })
            .then(() => {
                res.redirect('back')
            })
            .catch(next);
    }

    // [GET] /my-course
    mycourse(req, res, next) {
        if (req.session.username) {
            Student.findOne({ username: req.session.username })
                .then((student) => {
                    res.render('user/student/my-course', {
                        title: "Khóa học của bé |",
                        // student: req.session.username,
                        student: mongooseToObject(student),
                        active: "my-course",
                    })
                })
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }

    // [GET] /settings
    settings(req, res, next) {
        if (req.session.username) {
            res.render('user/student/settings', {
                title: "Cài đặt |",
                student: req.session.username,
                active: "settings",
            })
        }
        else {
            res.redirect('/signin');
        }
    }
    
    // [PUT] /:username/:courseId
    registerCourse(req, res, next) {
        Student.updateOne({ username: req.params.username }, { $push: { courses: { courseId: req.params.courseId } } })
            .then(() => {
                res.redirect('/my-course')
            })
            .catch(next);
    }
}

module.exports = new StudentController;