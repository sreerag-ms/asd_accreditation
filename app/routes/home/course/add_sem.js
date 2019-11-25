var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var stud_academics = require('../../../models/student_academics');
var dyn = require('../../../models/dynamic')
var Sequelize = require('sequelize');
var dynamicId;
router.get('/:uid', (req, res)=> {
    dynamicId=parseInt(req.params.uid);
    console.log(dynamicId+" inside the add_sem router");
    console.log(req.session.uniqueId);
    res.render('courses/add_sem',{dynamicId:dynamicId});

})
router.post('/',(req,res)=>{
    
    console.log(req.body);
    var studentSem=req.body.student;
    for (i = 0; i < studentSem.length; i++) {
        // var mark=grade(studentSem[i].grade)
        
        var data={
           admission_no:parseInt(studentSem[i].admNo),
           dynamic_id:dynamicId,
            sem_marks:parseInt(studentSem[i].grade)
        }
        stud_academics.create(data).then(user => {
            
            console.log(data);
          }).then(()=>{
                    console.log('added data Redirecting home now');
                    res.redirect('/home');
          })
        }
})


// function grade(a){
//     switch(a){
//         case 'O':return 10;
//         case 'o':return 10;
//         case 'A+':return 10;
//         case 'a+':return 10;
//         case 'A':return 10;
//         case 'a':return 10;
//         case 'B+':return 10;
//     }
// }

module.exports=router;