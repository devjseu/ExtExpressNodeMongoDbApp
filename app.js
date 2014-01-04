/**
 * Module dependencies.
 * @author lukasz.sudol <lukasz@devjs.eu>
 */

var express = require('express');
var router = require('./application/router');
var http = require('http');
var path = require('path');
var dbPath = 'mongodb://localhost/devjs';

// import the data layer
var mongoose = require('mongoose');
// import the models
var models = {
    User: require('./application/model/user')(mongoose)
};

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//db connection
mongoose.connect(dbPath, function onMongooseError(err) {
    if (err) throw err;
});

//router
router.init(app, models);

app.listen(8080);
console.log('Listening on port 8080');