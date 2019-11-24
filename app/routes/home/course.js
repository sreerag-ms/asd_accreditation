var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../models/internals');
var dyn = require('../../models/dynamic')
var Sequelize = require('sequelize');

router.get('/:uid', function testfn(req, res) {
    var dynamicId=parseInt(req.params.uid);
    console.log(dynamicId);
    console.log(req.session.uniqueId);
    // res.send=dynamicId;
    internals.findAll({
        raw:true,
        where:{dynamic_id:dynamicId},
        attributes:["internal_no","co_1"]
    }).then(internalData=>{
        
        if(internalData.length==0){
            console.log("no data");
            res.render('courses/internal');
        }
        else{
            console.log(internalData.length);
            res.render('courses/internal',{internalData:internalData,dynamicId:dynamicId});
        }
    })

    
  });



module.exports=router;