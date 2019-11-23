var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../models/internals');
var dyn = require('../../models/dynamic')
var Sequelize = require('sequelize');

router.get('/:uid', function testfn(req, res) {
    var dynamicId=req.params.uid;
    console.log(dynamicId);
    console.log(req.session.uniqueId);
    res.send=dynamicId;
    // internals.require  CONTINUE FROM HERE

    
  });



module.exports=router;