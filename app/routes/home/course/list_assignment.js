var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var assignments = require('../../../models/assignments');
var dyn = require('../../../models/dynamic')
var Sequelize = require('sequelize');

router.get('/:uid/:assignment_no', function testfn(req, res) {
    var dynamicId=parseInt(req.params.uid);
    var assignmentNo=parseInt(req.params.assignment_no);
    console.log("inside internals router");
    
    console.log(dynamicId);
    assignments.findAll({
        raw:true,
        where:{dynamic_id:dynamicId,assignment_no:assignmentNo},
        attributes:["adm_no","co_1","co_1_total","co_2","co_2_total","co_3","co_3_total","co_4","co_4_total","co_5","co_5_total","co_6","co_6_total"],
    }).then(assignmentList=>{
        console.log(assignmentList);
        
        res.render('courses/assignment_list',{assignmentList:assignmentList});

    })

  });



module.exports=router;