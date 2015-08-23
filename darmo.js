var express = require('express');
var app = express();
var storage = require('./src/localstorage');

app
    .set('view engine', 'jade')
;

app
    .get('/', function (req, res) {
        res.render('index.jade');
    })
;

app.listen(8080);