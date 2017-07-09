'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.addColumn(
      'Messages',
      'UsersId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      }
    )

  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.removeColumn(
      'Messages',
      'UsersId'
    )
  }
};