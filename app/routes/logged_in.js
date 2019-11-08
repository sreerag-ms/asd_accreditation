var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');

function checkAuth(req, res, next) {
    if (!req.session.user_id) {
      res.send('You are not authorized to view this page');
    } else {
      next();
    }
  }

  router.post('/', bodyParser.urlencoded({ extended: false }),function (req, res) {
    let userid=req.body.userid;
    let pass=req.body.pass;
    // let semester=parseInt(req.body.semester);
    // connection.query("INSERT INTO course_list VALUES('"+course+"','"+name+"',"+semester+")",function (error, results, fields) {
    //   if (error) throw error;
    //   // connected!
    // });
    // res.render('login',{ title:req.body.name });
    if(userid=='john' && pass=='pass')
    {
      res.render('logged_in');
    }
    else{
      res.send('invalid user');
    }
    console.log(req.body.userid);
  });




  module.exports = router;
