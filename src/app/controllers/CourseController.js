const Course = require('../models/Course');
const Lesson = require('../models/Lesson');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const { generateSlug } = require('../../util/slug');

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
    lessons(req, res, next) {
        if (req.session.username) {
            Promise.all([Course.findOne({ _id: req.params.id }), Lesson.find({ courseId: req.params.id }).sort({ order: 'asc' })])
                .then(([course, lessons]) =>
                    res.render('user/courses/lessons', {
                        title: `Học ${course.name} |`,
                        student: req.session.username,
                        course: mongooseToObject(course),
                        lessons: multipleMongooseToObject(lessons),
                    }),
                )
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }

    // [GET] /courses/lessons/:lessonId
    learn(req, res, next) {
        if (req.session.username) {
            Lesson.findById({ _id: req.params.lessonId })
                .then(lesson => {
                    Lesson.find({ courseId: lesson.courseId }).sort({ order: 'asc' })
                        .then(lessons => {
                            res.render('user/courses/learn', {
                                title: 'Học |',
                                student: req.session.username,
                                lesson: mongooseToObject(lesson),
                                lessons: multipleMongooseToObject(lessons),
                            })
                        })
                        .catch(next);
                })
                .catch(next);
        }
        else {
            res.redirect('/signin');
        }
    }

    // [POST] /courses/create
    createCourses(req, res, next) {
        const course = new Course({
            name: req.body.name,
            image: req.body.image,
            icon: req.body.icon,
            description: req.body.description,
            slug: generateSlug(req.body.name),
        });
        course.save()
            .then(() => res.redirect('/admin/courses'))
            .catch(next);
    }

    // [PUT] /courses/:id
    updateCourses(req, res, next) {

    }
    
    // [POST] /courses/:id/lessons/create
    createLessons(req, res, next) {
        const lesson = new Lesson({
            courseId: req.params.id,
            order: req.body.order,
            name: req.body.name,
            description: req.body.description,
            workbook: req.body.workbook,
            video: req.body.video,
            slug: generateSlug(req.body.name),
        });
        lesson.save()
            .then(() => {
                Course.findById({ _id: lesson.courseId })
                    .then(course => {
                        course.lessons.push(lesson);
                        course.save();
                        res.redirect(`/admin/courses/update/${course._id}`)
                    })
                    .catch();
            })
            .catch(next);
    }
}

module.exports = new CourseController;