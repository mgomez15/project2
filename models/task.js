module.exports = function (sequelize, DataTypes) {
   const Task = sequelize.define('task', {
      id: {
         type: DataTypes.UUID,
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4
      },
      name: {
         type: DataTypes.STRING,
      },
      description: {
         type: DataTypes.TEXT,
      },
      status: {
         type: DataTypes.ENUM('incomplete', 'inprogress', 'complete'),
         defaultValue: 'incomplete'
      }
   });
   Task.associate = function(db) {
      // Task belongs to project
      Task.belongsTo(db.project, {
         foreignKey: 'projectId'
      });
   };
   return Task;
}