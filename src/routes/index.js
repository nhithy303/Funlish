const homeRouter = require('./home');
const courseRouter = require('./courses');
const playRouter = require('./play');
const blogRouter = require('./blog');
const aboutRouter = require('./about');
const contactRouter = require('./contact');
const userRouter = require('./users');
const adminRouter = require('./admin');
const meRouter = require('./me');

const route = (app) => {

    app.use('/', homeRouter);
    app.use('/courses', courseRouter);
    app.use('/play', playRouter);
    app.use('/blog', blogRouter);
    app.use('/about', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('/', userRouter);
    app.use('/admin', adminRouter);
    app.use('/', meRouter);

}

module.exports = route;