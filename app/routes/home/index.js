var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser=bodyParser.urlencoded({ extended: false });
var add_query="";
var mysql=require('mysql');
var session=require('express-session');
var page_life=1000*3600*24;
const bcrypt = require('bcrypt');
const hash = 10;

const{
  PORT=2000,
  NODE_ENV='development',
  SESS_NAME='sess',
  SESS_LIFE=page_life
}=process.env

router.use(session({
  name:SESS_NAME,
  cookie:{
    maxAge:SESS_LIFE,
    sameSite:true,


  },
  secret:'appyfizz',
  resave:false,
  saveUninitialized:false,
}));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'phpmyadmin',
    password : 'password',
    database : 'accreditation'
  });


router.get('/add_course',(req,res)=>{
    res.render('add_course');
})

router.post('/add_course',bodyParser.urlencoded({ extended: false }),(req,res)=>{

  res.send(JSON.stringify(req.session));
  // INSERT INTO `course_dynamic` (`course_code`, `fac_id`, `batch`) VALUES ('MA101', 'fac1', '2018');
})



  module.exports = router;
