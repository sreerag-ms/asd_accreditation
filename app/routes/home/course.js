var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../models/internals');
var dyn = require('../../models/dynamic');
var assignments = require('../../models/assignments');
var Sequelize = require('sequelize');

router.get('/:uid', function testfn(req, res) {
    var dynamicId=parseInt(req.params.uid);
    console.log(dynamicId);
    console.log(req.session.uniqueId);
    // res.send=dynamicId;
    internals.findAll({
        raw:true,
        where:{dynamic_id:dynamicId},
        attributes:["internal_no"],
        group:["internal_no"]
    }).then(internalData=>{
        if(internalData.length==0){
            console.log("no internals so far on : "+dynamicId );
        }
        else{
            console.log("No of internals on : "+dynamicId+"=="+ internalData.length);
        }
        assignments.findAll({
            raw:true,
            where:{dynamic_id:dynamicId},
            attributes:["assignment_no"],
            group:["assignment_no"]
        }).then(assignmentData=>{
            if(assignmentData.length==0)
                console.log("no internals so far on : "+dynamicId );
            else
                console.log("No of internals on : "+dynamicId+"=="+ assignmentData.length);
            res.render('courses/internal',{internalData:internalData,assignmentData:assignmentData,dynamicId:dynamicId});

        })
    }
    )


    
  });



module.exports=router;