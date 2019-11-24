var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../../models/internals');
var dyn = require('../../../models/dynamic')
var Sequelize = require('sequelize');

router.get('/:uid', (req, res)=> {
    var dynamicId=parseInt(req.params.uid);
    console.log(dynamicId+"inside the add_internal router");
    console.log(req.session.uniqueId);
    // res.send=dynamicId;
    dyn.findOne({
        raw:true,
        where:{dynamic_id:dynamicId},
        attributes:["internal_no"]
    }).then(courseDynamic=>{
        var internal_no=parseInt(courseDynamic.internal_no);
        console.log(internal_no);
        res.render('courses/add_internal',{internal_no:(internal_no+1)});

    })

    
  });

  router.post('/:uid',(req,res)=>{
    console.log(req.body);
    var studentInternal=req.body.student;
    var totalInternal=req.body.total_co;


    var dynamicId=parseInt(req.params.uid);
    console.log(dynamicId);
    for (i = 0; i < studentInternal.length; i++) {
        var data={
            adm_no:parseInt(studentInternal[i].admNo),
            internal_no:parseInt(totalInternal.internalNo),
            dynamic_id:dynamicId,
            co_1:parseInt(studentInternal[i].co_1),
            co_1_total:parseInt(totalInternal.co_1_total),
            co_2:parseInt(studentInternal[i].co_2),
            co_2_total:parseInt(totalInternal.co_2_total),
            co_3:parseInt(studentInternal[i].co_3),
            co_3_total:parseInt(totalInternal.co_3_total),
            co_4:parseInt(studentInternal[i].co_4),
            co_4_total:parseInt(totalInternal.co_4_total),
            co_5:parseInt(studentInternal[i].co_5),
            co_5_total:parseInt(totalInternal.co_5_total),
            co_6:parseInt(studentInternal[i].co_6),
            co_6_total:parseInt(totalInternal.co_6_total),
        }
        internals.create(data).then(user => {
            // let's assume the default of isAdmin is false:
            console.log(data);
            
          })
    }


  })



module.exports=router;