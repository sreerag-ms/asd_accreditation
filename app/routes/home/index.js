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
var db=require('../../models/dat');
var course_list=require('../../models/course_list');
var dyn=require('../../models/dynamic')

  // db.authenticate()
  //   .then(()=>console.log('connected to database'))
  //   .catch(err=>(console.log('error')
  //   ))



const{
  PORT=2000,
  NODE_ENV='development',
  SESS_NAME='sess',
  SESS_LIFE=new Date(Date.now() + 3600000)
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




router.get('/add_course',(req,res)=>{

if(!req.session.uniqueId){
  res.redirect('/login');
}
course_list.findAll({
  raw:true,

  attributes:["course_code","name"]

}).then(function(project) {

  console.log(project); 
  res.render('add_course',{courseList:project});

  // project will be the first entry of the Projects table with the title 'aProject' || null
  // project.title will contain the name of the project
})

// console.log(courseList[0].course_code); 

})

router.post('/add_course',bodyParser.urlencoded({ extended: false }),(req,res)=>{
  var courseid=req.body.course;
  // var coursename=req.body.course_name;
  var year=req.body.batch;

  var s=req.session;
  // res.send(s.uniqueId);
  const data={
    course_code:courseid,
    fac_id:s.uniqueId,
    batch:year
}


// let {course_code,fac_id,batch}=data;
dyn.create({
  course_code:courseid,
  fac_id:s.uniqueId,  
  batch:year
})
.then(()=>{
console.log("data loaded");
res.redirect('/home');


})
.catch(err=>{console.log("error in loading course data "+err+" "+courseid);

}
)

})





  module.exports = router;
