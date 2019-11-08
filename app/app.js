var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var page_life=1000*3600*24;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter=require('./routes/login');
var loggedInRouter = require('./routes/logged_in')
var session=require('express-session');

const{
  PORT=2000,
  NODE_ENV='development',
  SESS_NAME='sess',
  SESS_LIFE=page_life
}=process.env;
var app = express();
var bodyParser = require('body-parser');


const { Client } = require('pg');
const client = new Client();
app.use(session({
  name:SESS_NAME,
  cookie:{
    maxAge:SESS_LIFE,
    sameSite:true,


  },
  secret:'appyfizz',
  resave:false,
  saveUninitialized:false,
}));

app.use(bodyParser.urlencoded({ extended: false }));
var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'phpmyadmin',
  password : 'password',
  database : 'accreditation'
});



// app.use(bodyParser.json())
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/logged_in',loggedInRouter);

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// connection.end();
var server = app.listen(PORT,function(){
  console.log('sercer running on port '+PORT);
});

module.exports = app;