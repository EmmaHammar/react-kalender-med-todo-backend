var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var addRouter = require('./routes/add');
var masterlistRouter = require('./routes/masterlist');
var deleteRouter = require('./routes/delete');

var app = express();

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb+srv://emmahammar:Hejhej123!@taskinfo.uvgzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true
})
.then(client => {
    console.log("Vi är uppkopplade mot db");

    const db = client.db("taskInfoDb");
    app.locals.db = db;
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/masterlist', masterlistRouter);
app.use('/add', addRouter);
app.use('/delete', deleteRouter);

module.exports = app;
