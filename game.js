var king = require('./my_modules/persons').king;
var prince = require('./my_modules/persons').prince;

var express = require('express');
var app = express();
var index = require('./routes')(app);


//king.moveTo(483, 397);


app.listen(3030, function () {
    console.log('Server start on port = 3030');
});
