var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var nconf = require('nconf');

var indexrouter = require('./routes/index');
var mock_api_router = require('./routes/api/mockapi');
var api_router = require('./routes/api/mock');
var mocks_router = require('./routes/mocks');



//mongodb
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gallery');

//Instantiate App
var app = express();

//nconf setup
nconf.argv()
     .env()
     .file({file: './config/config-' + app.get('env') + '.json'});

// view engine setup
app.engine('dust', cons.dust);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');

//parsing and logs
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '200kb'
 }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Statics
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'));

//Routes
app.use(mock_api_router);  // (/mockapi/mock/:mockid)
app.use(api_router);  // (/api/mock/:mockid)
app.use(mocks_router); // (/api/mocks)

// error handlers
// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  if (err) {
      next(err);
  } else {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
