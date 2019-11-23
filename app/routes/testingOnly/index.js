
var express = require('express');
var router = express.Router();
var db=require('../../models/dat');
var dyn=require('../../models/dynamic');

//   db.authenticate()
//     .then(()=>console.log('connected to database'))
//     .catch(err=>(console.log('error')
//     ))
/* GET users listing. */
router.get('/',(req,res)=>{
    res.send('sdasdasd')
    dyn.findAll()
        .then(dyn=>{

            console.log(dyn);
            res.sendStatus(200);
        })
})
router.get('/add',(req,res)=>{
    const data={
        course_code:"M300",
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
// console.log('adasd');

module.exports = router;