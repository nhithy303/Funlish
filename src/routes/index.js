const homeRouter = require('./home');
const courseRouter = require('./courses');
const blogRouter = require('./blog');
const aboutRouter = require('./about');
const contactRouter = require('./contact');
const signRouter = require('./sign');
const adminRouter = require('./admin');

const route = (app) => {

    app.use('/', homeRouter);
    app.use('/courses', courseRouter);
    app.use('/blog', blogRouter);
    app.use('/about', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('/', signRouter);
    app.use('/admin', adminRouter);

}

module.exports = route;