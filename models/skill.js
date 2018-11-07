module.exports = function (sequelize, DataTypes) {
   const Skill = sequelize.define('skill', {
      id: {
         type: DataTypes.UUID,
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4
      },
      name: {
         type: DataTypes.STRING,
      },
      category: {
         type: DataTypes.ENUM('frontend', 'backend', 'fullstack', 'design'),
         defaultValue: 'fullstack'
      },
      description: {
         type: DataTypes.TEXT,
      }
   });
   return Skill;
}