var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');


mongoose.connect('mongodb://localhost/kravetsDB');
var db = mongoose.connection;

db.once('open', function() {
    app.use(logger('dev'));
    app.use(bodyParser.json());

    require('./models');
    require('./routes')(app, db);

    app.listen(3030, function () {
        console.log('Server start on port = 3030');
    });
});

db.on('error', function(err) {
    console.error(err);
});

