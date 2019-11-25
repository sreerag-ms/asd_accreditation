
var express = require('express');
var Sequelize = require('sequelize');
var db=require('../models/dat')
const dyn=db.define('student_academics',{
    admission_no:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    dynamic_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true
    },
    sem_marks:{
        type:Sequelize.DECIMAL
    }
},{
    freezeTableName: true,

})

module.exports=dyn;
