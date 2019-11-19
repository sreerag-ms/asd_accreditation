var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var finalhandler = require('finalhandler')
const bcrypt = require('bcrypt');
var Sequelize = require('sequelize');
const saltRounds = 10;

var db=require('../../models/dat');


  db.authenticate()
    .then(()=>console.log('connected to database'))
    .catch(err=>(console.log('error')
    ))
    const faculty_table=db.define('faculty_details',{
      fac_id:{
          type:Sequelize.STRING,
          primaryKey: true,
      },
      name:{
          type:Sequelize.STRING
      },
      mailid:{
          type:Sequelize.STRING
      },
      password:{
        type:Sequelize.STRING
      },

  },{
      freezeTableName: true,
  
  })

    router.get('/',(req,res)=>{
      res.render('./admin/signup');
    })
  router.post('/signup', bodyParser.urlencoded({ extended: false }),function (req, res) {
    let userid=req.body.fac_id;
    let pass=req.body.pass;
    console.log(pass);
    
    let userEmail=req.body.email;
    let userName=req.body.fac_name;
    
    console.log('accepted');
    
    // let semester=parseInt(req.body.semester);
    // connection.query("INSERT INTO course_list VALUES('"+course+"','"+name+"',"+semester+")",function (error, results, fields) {
    //   if (error) throw error;
    //   // connected!
    // });
    // res.render('login',{ title:req.body.name });
    bcrypt.hash(pass, saltRounds, function(err, hash) {
    // const data={
    //     fac_id:userid,
    //     password:hash,
    //     name:userNname,
    //     email:userEmail,
    //   }
      console.log(userName);
    
      // let {fac_id,password,name,email}=data;
      faculty_table.create({
        fac_id:userid,
        password:hash,
        name:userName,
        mailid:userEmail
      })
      .then(()=>res.redirect('/'))
      .catch(err=>console.log(err)
      )
    });
   
    
  });




  module.exports = router;
