var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var session=require('express-session');



router.use(session({
  secret:'appyfizz',
  resave:false,
  saveUninitialized:true
}));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'phpmyadmin',
    password : 'password',
    database : 'accreditation'
  });

/*GET home page. */
router.get('/', function(req, res, next) {
  session=req.session;
  if(!(session.flag))
    res.render('index', { title: 'Express' });
  else
    res.render('profile',{title:sessions.id}); 
});
// router.post('/login', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/logout',(req,res)=>{
  req.session.destroy((error)=>
   {
     console.log('error');
     res.redirect('/login');
   }
  );

})


router.post('/login_check', bodyParser.urlencoded({ extended: false }),function (req, res) {
  let user=req.body.userid;
  let pass=req.body.pass;
  // let semester=parseInt(req.body.semester);
  connection.query("SELECT name,mailid FROM faculty_details WHERE fac_id LIKE '"+user+"' ", function(err, rows, fields)
  {
          console.log('Connection result error '+err);
          if(rows.length==1){
            // res.writeHead(200, { 'Content-Type': 'application/json'});
            // res.end(JSON.stringify(rows));
            // res.end();
            session.id=user;
            session.flag=true;
            res.redirect('/redirect')
            console.log(session);
            

          }
          else{
            res.redirect('/login');
            
          }

  })
  console.log(req.body.userid);
});

router.get('/redirect',(req,res)=>{
  res.render('profile',{title:session.id});
});

module.exports = router;
