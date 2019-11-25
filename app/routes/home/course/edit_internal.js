var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../../models/internals');
var dyn = require('../../../models/dynamic')
var Sequelize = require('sequelize');
var dynamicId;
var internalNo;
router.get('/:uid/internal_no', (req, res) =>{
    dynamicId = parseInt(req.params.uid);
    internalNo = parseInt(req.params.internal_no);

    console.log(dynamicId);
    

  });

  router.post('/find',(req,res)=>{
    var admNo=parseInt(req.body.admNo);
    console.log(admNo);
    
    internals.findOne({
      raw:true,
      where:{adm_no:admNo,dynamic_id:dynamicId,internal_no:internalNo}
    }).then((studentInternal)=>{
      if(studentInternal)
          res.send(studentInternal)
      else
        console.log("such a student does not exist");
          
    })
    router.post('/update',(req,res)=>{
      dyn.update(
        // { co1:parseInt(totalInternal.internalNo)},
        // { where: {dynamic_id:dynamicId}}
      )
    })
  })


module.exports=router;