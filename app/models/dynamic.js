
var express = require('express');
var Sequelize = require('sequelize');
var db=require('../models/dat')
const dyn=db.define('dynamic',{
    subject_code:{
        type:Sequelize.STRING
    },
    fac_id:{
        type:Sequelize.STRING
    },
    batch:{
        type:Sequelize.INTEGER
    },
})
module.exports=dyn;
