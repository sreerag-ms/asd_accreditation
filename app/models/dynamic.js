
var express = require('express');
var Sequelize = require('sequelize');
var db=require('../models/dat')
const dyn=db.define('course_dynamic',{
    course_code:{
        type:Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    fac_id:{
        type:Sequelize.STRING
    },
    batch:{
        type:Sequelize.INTEGER
    },
},{
    freezeTableName: true,

})
module.exports=dyn;
