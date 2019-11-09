var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser=bodyParser.urlencoded({ extended: false });
var add_query="";
var mysql=require('mysql');
var session=require('express-session');
var page_life=1000*3600*24;
var Sequelize = require('sequelize');
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
  var courseid=req.body.course;
  var coursename=req.body.course_name;
  var batch=req.body.batch;

  var s=req.session;
  res.send(s.uniqueId);
  connection.query("INSERT INTO `course_dynamic` (`course_code`, `fac_id`, `batch`) VALUES ('"+courseid+"', '"+s.uniqueId+"', '"+batch+"');", function(err, rows, fields)
  {    
          console.log('Connection result error '+err);
          if(!err){
            console.log('user');
            
            // res.writeHead(200, { 'Content-Type': 'application/json'});
            // res.end(JSON.stringify(rows));
            // res.end();
            // res.redirect('../home');
            console.log(s);

          }
          else{
            throw err;
            console.log('sadasdasd');
            
            res.send('corrupt data');
          }

  })
  
  // 
})



  module.exports = router;
