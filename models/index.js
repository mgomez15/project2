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

// Team -> Users
db.team.hasMany(db.user, {
   as: 'teamUsers' 
});
db.user.belongsTo(db.team, {
  as: 'teamUser'
});

// Team -> Projects 
db.team.hasMany(db.project, { 
  as: 'teamProjects' 
});
db.project.belongsTo(db.team, {
  as: 'teamProject'
});

// Projects -> Tasks
db.project.hasMany(db.task, { 
  as: 'projectTasks' 
});
db.task.belongsTo(db.project, {
  as: 'projectTask'
});

// User -> Tasks
db.user.hasMany(db.task, { 
  as: 'userTasks' 
});
db.task.belongsTo(db.user, {
  as: 'userTask'
});

// User -> Skills
db.user.hasMany(db.skill, {
  as: 'userSkills'
});
db.skill.belongsTo(db.user, {
  as: 'userSkill'
});

module.exports = db;