var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../../models/internals');
var dyn = require('../../../models/dynamic')
var Sequelize = require('sequelize');

router.get('/:uid/:internal_no', function testfn(req, res) {
    var dynamicId=parseInt(req.params.uid);
    var internalNo=parseInt(req.params.internal_no);

    console.log(dynamicId);
    internals.findAll({
        raw:true,
        where:{dynamic_id:dynamicId,internal_no:internalNo},
        attributes:["adm_no","co_1","co_1_total","co_2","co_2_total","co_3","co_3_total","co_4","co_4_total","co_5","co_5_total","co_6","co_6_total"],
    }).then(internalList=>{
        console.log(internalList);
        
        res.render('courses/internal_list',{internalList:internalList});

    })

  });



module.exports=router;