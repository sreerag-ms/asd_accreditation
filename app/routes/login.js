var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'phpmyadmin',
    password : 'password',
    database : 'accreditation'
  });

router.post('/', bodyParser.urlencoded({ extended: false }),function (req, res) {
    let course=req.body.coursecode;
    let name=req.body.name;
    let semester=parseInt(req.body.semester);
    connection.query("INSERT INTO course_list VALUES('"+course+"','"+name+"',"+semester+")",function (error, results, fields) {
      if (error) throw error;
      // connected!
    });
    res.render('login',{ title:req.body.userid });
    console.log(req.body.userid);
  });


  module.exports = router;
