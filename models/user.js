module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
     id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
     username: {
        type: DataTypes.STRING,
        unique: true
     },
     about: {
        type: DataTypes.TEXT
     },
     email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
           isEmail: true
        }
     },
     password: {
        type: DataTypes.STRING,
        allowNull: false
     },
     last_login: {
        type: DataTypes.DATE
     },
     status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
     }
  });
  return User;
}