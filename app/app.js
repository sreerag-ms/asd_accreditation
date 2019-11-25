var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var page_life=1000*3600*24;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter=require('./routes/home/index');
var testRouter=require('./routes/testingOnly/index');
var loggedInRouter = require('./routes/logged_in')
var session=require('express-session');
var db=require('./models/dat');
var adminRouter=require('./routes/admin/index');
var courseRouter=require('./routes/home/course');
var addInternalRouter = require('./routes/home/course/add_internal');
var addAssignmentRouter = require('./routes/home/course/add_assignment');
var editInternalRouter = require('./routes/home/course/edit_internal');
var internalList = require('./routes/home/course/list_internal');
var assignmentList = require('./routes/home/course/list_assignment');
var addSemRouter = require('./routes/home/course/add_sem');
var genResRouter = require('./routes/home/generate_res')


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
app.use('/home',loginRouter);
app.use('/logged_in',loggedInRouter);
app.use('/testingOnly',testRouter);
app.use('/admin',adminRouter);
app.use('/courses',courseRouter);
app.use('/course/add_internal',addInternalRouter);
app.use('/course/add_assignment',addAssignmentRouter);
app.use('/course/edit_internal',editInternalRouter);
app.use('/course/internal_list',internalList);
app.use('/course/assignment_list',assignmentList);
app.use('/course/add_sem',addSemRouter);
app.use('/course/gen_result',genResRouter);

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