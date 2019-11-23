var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var session=require('express-session');
var page_life=1000*3600*24;
const bcrypt = require('bcrypt');
const hash = 10;
var dyn=require('../models/dynamic')

var db=require('../models/dat');
var faculty_details=require('../models/faculty_details');
var course_list=require('../models/course_list');


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


  const redirectLogin= (req,res,next)=>{
    let sess=req.session;
    if(!(req.session.flag)){
      res.redirect('/login');
    }
    else{
      next();
    }
  }
  const redirectHome= (req,res,next)=>{
    let sess=req.session;
    if(req.session.flag){
      res.redirect('/home');
    }
    else{
      next();
    }
  }

/*GET home page. */
router.get('/', function(req, res, next) {
  let sess=req.session;
    res.render('index', { title: 'Express' });
});

router.get('/login',redirectHome, function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/logout',redirectLogin,(req,res)=>{
  req.session.destroy((error)=>
   {
     console.log('error');
     res.redirect('/login');
   }
  );

})


router.post('/login_check', bodyParser.urlencoded({ extended: false }),function (req, res) {
  let sess=req.session;
  let user=req.body.userid;
  let pass=req.body.pass;



  faculty_details.findOne({
    raw:true,
    where: {fac_id: user},
    attributes: ['password']
  }).then(project => {
      if(project){
        bcrypt.compare(pass, project.password, function(err, rep) {
          if(err)
            console.log('hahaha');
        if(rep==true){
        req.session.uniqueId=user;
        req.session.flag=true;
        res.redirect('/home');
        }
        else
        {
        res.redirect('/login');
      }
      });
      }
      else{
        console.log('no such User'+project.password);
        
      }

  })
  console.log(req.body.userid);
});

router.get('/home',redirectLogin,(req,res)=>{
  dyn.findAll({
    raw:true,
    where:{fac_id:req.session.uniqueId},
    attributes:["dynamic_id","course_code","batch","updatedAt"],
    order: [
      ["batch", "DESC"]]
    // order:['batch', 'DESC'],
  }).then(function(project){

    console.log(project);
    faculty_details.findOne({
      raw:true,
      where:{fac_id:req.session.uniqueId},
      attributes:["name"]

    }).then(function(facData){
      console.log(facData);
      
      res.render('profile',{title:req.session.uniqueId,
        courses:project,
      facData:facData.name
      });
    })


  })
});

module.exports = router;
