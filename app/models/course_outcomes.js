var express = require('express');
var Sequelize = require('sequelize');
var db=require('../models/dat')
const course_outcomes=db.define('course_outcomes',{
    course_code:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    co:{
            type:Sequelize.INTEGER,
            primaryKey:true
    },
    po_1:{
        type:Sequelize.INTEGER
    },
    po_2:{
        type:Sequelize.INTEGER
    },
    po_3:{
        type:Sequelize.INTEGER
    },
    po_4:{
        type:Sequelize.INTEGER
    },
    po_5:{
        type:Sequelize.INTEGER
    },
    po_6:{
        type:Sequelize.INTEGER
    },
    po_7:{
        type:Sequelize.INTEGER
    },
    po_8:{
        type:Sequelize.INTEGER
    },
    po_9:{
        type:Sequelize.INTEGER
    },
    po_10:{
        type:Sequelize.INTEGER
    },
    po_11:{
        type:Sequelize.INTEGER
    },
    po_12:{
        type:Sequelize.INTEGER
    },
    co_description:{
        type:Sequelize.STRING
    }


},{
    timestamps:false,

    freezeTableName: true,

})

module.exports=course_outcomes;
