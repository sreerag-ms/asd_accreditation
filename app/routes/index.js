var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var session=require('express-session');
var page_life=1000*3600*24;
const bcrypt = require('bcrypt');
const hash = 10;

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

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'phpmyadmin',
    password : 'password',
    database : 'accreditation'
  });
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
// router.post('/login', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
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
  // let semester=parseInt(req.body.semester);
  connection.query("SELECT fac_id,mailid FROM faculty_details WHERE fac_id LIKE '"+user+"' ", function(err, rows, fields)
  {
          console.log('Connection result error '+err);
          if(rows.length==1){
            console.log('user found');
            
            // res.writeHead(200, { 'Content-Type': 'application/json'});
            // res.end(JSON.stringify(rows));
            // res.end();
            req.session.uniqueId=user;
            req.session.flag=true;
            res.redirect('/home');
            console.log(req.session);

          }
          else{

            res.redirect('/login');
          }

  })
  console.log(req.body.userid);
});

router.get('/home',redirectLogin,(req,res)=>{
  res.render('profile',{title:req.session.uniqueId});
});

module.exports = router;
