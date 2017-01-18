var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('underscore');
//允许跨域
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
  res.header('Access-Control-Allow-Headers','X-Sso-Token,Content-Type,X-Requested-With,Put-Default-Position,If-None-Match');
  next();
}
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(allowCrossDomain);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public/accounts/dest'));//设置静态文件根目录
//app.use(express.static('public/accounts/app'));//设置静态文件根目录
//app.use(express.static('public/accounts/'));//设置静态文件根目录
//custom use
//custom common
//custom application level
var login = require('./routes/accounts/authority/login');
var register = require('./routes/accounts/authority/register');
var checkAuth = require('./routes/accounts/authority/checkAuth');
var dictData = require('./routes/accounts/dict/dicts');
var incomes = require('./routes/accounts/incomes');
var expenses = require('./routes/accounts/expenses');
var statistics = require('./routes/accounts/statistics');
var announcements = require('./routes/accounts/common/announcements');
app.use('/accounts/authority/login',login);//
app.use('/accounts/authority/register',register);//
app.use('/accounts',checkAuth);//use to check auth for all api request.connect middle ware
app.use('/accounts/dict/code/',dictData);
app.use('/accounts/incomes',incomes);
app.use('/accounts/expenses',expenses);
app.use('/accounts/statistics',statistics);
app.use('/accounts/common/announcements',announcements);
//custom use end
//app.use(express.static(path.join(__dirname, 'public')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

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
