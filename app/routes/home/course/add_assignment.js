var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var assignments = require('../../../models/assignments');
var dyn = require('../../../models/dynamic')
var Sequelize = require('sequelize');
var dynamicId;
router.get('/:uid', (req, res)=> {
  dynamicId=parseInt(req.params.uid);
    console.log(dynamicId+"inside the add_assignment router");
    console.log(req.session.uniqueId);
    
    dyn.findOne({
        raw:true,
        where:{dynamic_id:dynamicId},
        attributes:["assignment_no"]
    }).then(courseDynamic=>{
        var assignment_no=parseInt(courseDynamic.assignment_no);
        console.log("assignment N0 " + assignment_no + "on dynId" + dynamicId );
        res.render('courses/add_assignment',{assignment_no:(assignment_no+1)});

    })

    
  });

  router.post('/',(req,res)=>{
    console.log(req.body);
    var studentAssignment=req.body.student;
    var totalAssignment=req.body.total_co;


    // var dynamicId=parseInt(req.params.uid);
    console.log(dynamicId);
    for (i = 0; i < studentAssignment.length; i++) {
        var data={
            adm_no:parseInt(studentAssignment[i].admNo),
            assignment_no:parseInt(totalAssignment.assignmentNo),
            dynamic_id:dynamicId,
            co_1:parseInt(studentAssignment[i].co_1),
            co_1_total:parseInt(totalAssignment.co_1_total),
            co_2:parseInt(studentAssignment[i].co_2),
            co_2_total:parseInt(totalAssignment.co_2_total),
            co_3:parseInt(studentAssignment[i].co_3),
            co_3_total:parseInt(totalAssignment.co_3_total),
            co_4:parseInt(studentAssignment[i].co_4),
            co_4_total:parseInt(totalAssignment.co_4_total),
            co_5:parseInt(studentAssignment[i].co_5),
            co_5_total:parseInt(totalAssignment.co_5_total),
            co_6:parseInt(studentAssignment[i].co_6),
            co_6_total:parseInt(totalAssignment.co_6_total),
        }
        assignments.create(data).then(user => {
            // let's assume the default of isAdmin is false:
            console.log(data);
          }).then(()=>{
            dyn.update(
                { assignment_no:parseInt(totalAssignment.assignmentNo)},
                { where: {dynamic_id:dynamicId}}
              )
                .then(result =>
                  {
                    console.log('added data Redirecting home now');
                    res.redirect('/home');
                  }
                )
                // .catch(err =>
                //   {
                //     console.log('Error in adding'+err);
                    
                //   }
                // )

              
          })
    }


  })



module.exports=router;