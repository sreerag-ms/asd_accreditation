var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var internals = require('../../../models/internals');
var dyn = require('../../../models/dynamic')
var Sequelize = require('sequelize');

router.get('/:uid', function testfn(req, res) {
    var dynamicId=parseInt(req.params.uid);
    console.log(dynamicId);
    
  });



module.exports=router;