var Sequelize = require('sequelize');




db = new Sequelize('accreditation', 'phpmyadmin', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
  db.authenticate()
  .then(()=>console.log('connected to databasess'))
  .catch(err=>(console.log('error')
  ))
module.exports=db;