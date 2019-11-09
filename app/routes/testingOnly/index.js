
var express = require('express');
var router = express.Router();
var db=require('../../models/dat');
var dyn=require('../../models/dynamic')

  db.authenticate()
    .then(()=>console.log('connected'))
    .catch(err=>(console.log('error')
    ))
/* GET users listing. */
router.get('/',(req,res)=>{
    res.send('sad');
})
router.get('/add',(req,res)=>{
    const data={
        course_code:"MA200",
        fac_id:"211",
        batch:"1999"
    }
    let {course_code,fac_id,batch}=data;
    dyn.create({
        course_code,fac_id,batch
    })
    .then(()=>res.redirect('/'))
    .catch(err=>console.log('error')
    )
})
console.log('adasd');

module.exports = router;