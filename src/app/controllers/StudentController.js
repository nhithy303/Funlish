const User = require('../models/User');
const Student = require('../models/Student');
const Character = require('../models/Character');
const Background = require('../models/Background');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class StudentController {

    // [GET] /dashboard
    dashboard(req, res, next) {
        if (req.session.username) {
            Promise.all([
                Student.findOne({ username: req.session.username }),
                Character.find({ name: { $nin: ['default'] } }),
                Background.find({ name: { $nin: ['default'] } }),
            ])
                .then(([student, characters, backgrounds]) =>
                    res.render('user/student/dashboard', {
                        title: "Tài khoản |",
                        active: "dashboard",
                        student: mongooseToObject(student),
                        characters: multipleMongooseToObject(characters),
                        backgrounds: multipleMongooseToObject(backgrounds),
                    }),
                )
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }

    // [PUT] /avatar/:id
    editAvatar(req, res, next) {
        Student.updateOne({ _id: req.params.id }, {
            'avatar.character': req.body.character,
            'avatar.background': req.body.background,
        })
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
    
    // [PUT] /register-course/:username
    registerCourse(req, res, next) {
        Student.findOne({ username: req.params.username, 'courses.courseId': req.body.courseId })
            .then((registeredCourse) => {
                if (!registeredCourse) {
                    Student.updateOne({ username: req.params.username },
                        { $push: { courses: {
                            courseId: req.body.courseId,
                            courseName: req.body.courseName,
                        } } })
                        .then(() => {
                            res.redirect('/my-course')
                        })
                        .catch(next);
                }
                else {
                    res.redirect('back');
                }
            })
            .catch(next);
    }

    // [GET] /settings
    settings(req, res, next) {
        if (req.session.username) {
            Student.findOne({ username: req.session.username })
                .then(student => {
                    res.render('user/student/settings', {
                        title: "Cài đặt |",
                        student: mongooseToObject(student),
                        active: "settings",
                    })
                })
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }

    // [PUT] /info/:id
    editInfo(req, res, next) {
        Student.findById({ _id: req.params.id })
            .then(student => {
                student.email = req.body.email;
                student.firstname = req.body.firstname;
                student.lastname = req.body.lastname;
                student.birthday = req.body.birthday;
                student.save()
                    .then(() => res.redirect('/settings'))
                    .catch(next);
            })
            .catch(next);
    }
    
}

module.exports = new StudentController;