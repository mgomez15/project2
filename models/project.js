module.exports = function (sequelize, DataTypes) {
   const Project = sequelize.define('project', {
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
         type: DataTypes.TEXT
      },
   });
   return Project;
}