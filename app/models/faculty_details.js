var express = require('express');
var Sequelize = require('sequelize');
var db=require('../models/dat');

const facullty_details=db.define('faculty_details',{
    fac_id:{
        type:Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type:Sequelize.STRING
    },
    mailid:{
        type:Sequelize.INTEGER
    },
    password:{
        type:Sequelize.STRING
    }
},{
    timestamps:false,
    freezeTableName: true,

})
module.exports=facullty_details;