module.exports = function (sequelize, DataTypes) {
   const Team = sequelize.define('team', {
      id: {
         type: DataTypes.UUID,
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
         validate: {
            len: {
               args: [3, 100],
               msg: 'Your project title is either too short or too long!'
            }
         }
      },
      description: {
         type: DataTypes.TEXT
      }
   });
   return Team;
}