module.exports = function (sequelize, DataTypes) {
   const Task = sequelize.define('task', {
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
         type: DataTypes.STRING,
         notEmpty: true
      },
      status: {
         type: DataTypes.ENUM('incomplete', 'inprogress', 'complete'),
         defaultValue: 'incomplete'
      }
   });
   return Task;
}