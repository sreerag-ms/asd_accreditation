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
  })



module.exports=router;