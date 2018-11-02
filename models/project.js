module.exports = function (sequelize, DataTypes) {
   var Project = sequelize.define('Project', {
      id: {
         autoIncrement: true,
         primaryKey: true,
         type: DataTypes.INTEGER
      },
      name: {
         type: DataTypes.STRING,
         notEmpty: true
      },
      description: {
         type: DataTypes.TEXT,
         notEmpty: true
      },
   });
   return Project;
}