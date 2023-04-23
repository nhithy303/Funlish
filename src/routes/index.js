const homeRouter = require('./home');
const courseRouter = require('./courses');
const blogRouter = require('./blog');
const aboutRouter = require('./about');
const contactRouter = require('./contact');
const userRouter = require('./users');
const adminRouter = require('./admin');

const route = (app) => {

    app.use('/', homeRouter);
    app.use('/courses', courseRouter);
    app.use('/blog', blogRouter);
    app.use('/about', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('/', userRouter);
    app.use('/admin', adminRouter);

}

module.exports = route;