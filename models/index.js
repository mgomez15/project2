'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}



fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Associations

// Users -> Projects
db.user.hasMany(db.project, { 
});
db.project.belongsTo(db.user, { 
});

// Projects -> Tasks
db.project.hasMany(db.task, { 
});
db.task.belongsTo(db.project, {
});

// User -> Tasks
db.user.hasMany(db.task, { 
});
db.task.belongsTo(db.user, {
});

// User -> Skills
db.user.hasMany(db.skill, {
});
db.skill.belongsTo(db.user, {
});


module.exports = db;