const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const session = require('express-session');
const hbsHelpers = require('./util/handlebars');
const methodOverride = require('method-override');

// Connect to db
db.connect();

const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'funlish hcmue',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
}));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'user',
    helpers: {
        formatDate: hbsHelpers.formatDate,
    },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routing
route(app);

app.listen(port, () =>
    console.log(`Funlish is starting at http://localhost:${port}`),
);