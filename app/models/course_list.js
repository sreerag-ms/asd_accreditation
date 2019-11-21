var express = require('express');
var Sequelize = require('sequelize');
var db=require('../models/dat');

const course_list=db.define('course_list',{
    course_code:{
        type:Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type:Sequelize.STRING
    },
    semester:{
        type:Sequelize.INTEGER
    },
},{
    timestamps:false,
    freezeTableName: true,

})
module.exports=course_list;