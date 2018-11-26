const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
global.appRoot = path.resolve(__dirname);

//connect to MongoDB
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/artrend', { useNewUrlParser: true, useFindAndModify: false });
const db = mongoose.connection;

//Configure app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('404: File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
