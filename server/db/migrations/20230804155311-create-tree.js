'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tree: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING
      },
      heightFt: {
        type: Sequelize.FLOAT,
        allowNull: true,
        validate: { min: 0}
      },
      groundCircumferenceFt: {
        type: Sequelize.FLOAT,
        allowNull: true,
        validate: { min: 0}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trees');
  }
};