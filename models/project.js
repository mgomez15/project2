module.exports = function (sequelize, DataTypes) {
   const Project = sequelize.define('project', {
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
   }, {
      hooks: {
         beforeValidate: function () {
            console.log('---Before validation---');
         },
         afterValidate: function () {
            console.log('---After validation---');
         },
         beforeCreate: function () {
            console.log('---Before creation---');
         },
         afterCreate: function (res) {
            console.log('---After creation---');
            console.log(`Created Project with title ${res.dataValues.slug}`);
         }
      }
   });
   // Project.associate = function (db) {
   //    // Project has many tasks
   //    Project.hasMany(db.task, {
   //       as: 'tasks',
   //       foreignKey: 'projectId'
   //    });
   // };
   return Project;
}