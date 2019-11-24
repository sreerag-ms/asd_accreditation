var express = require('express');
var Sequelize = require('sequelize');
var db=require('../models/dat')
const internals=db.define('internals',{
    adm_no:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    dynamic_id:{
            type:Sequelize.INTEGER,
            primaryKey:true

    },
    course_code:{
        type:Sequelize.STRING,
    },
    internal_no:{
        type:Sequelize.INTEGER,
        primaryKey:true

    },
    co_1:{
        type:Sequelize.INTEGER
    },
    co_2:{
        type:Sequelize.INTEGER
    },
    co_3:{
        type:Sequelize.INTEGER
    },
    co_4:{
        type:Sequelize.INTEGER
    },
    co_5:{
        type:Sequelize.INTEGER
    },
    co_6:{
        type:Sequelize.INTEGER
    },
    co_1_total:{
        type:Sequelize.INTEGER
    },
    co_2_total:{
        type:Sequelize.INTEGER
    },
    co_3_total:{
        type:Sequelize.INTEGER
    },
    co_4_total:{
        type:Sequelize.INTEGER
    },
    co_5_total:{
        type:Sequelize.INTEGER
    },
    co_6_total:{
        type:Sequelize.INTEGER
    }

},{
    freezeTableName: true,

})

module.exports=internals;
