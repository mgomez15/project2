"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("Users", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      lastname: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      username: {
        type: Sequelize.TEXT
      },
      about: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_login: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
      }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable("Users");
  }
};