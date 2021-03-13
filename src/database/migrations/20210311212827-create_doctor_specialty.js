"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("doctor_specialty", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "doctor",
          key: "id",
          onDelete: "CASCADE",
          allowNull: false,
          unique: false,
        },
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "specialty",
          key: "id",
          onDelete: "CASCADE",
          allowNull: false,
        },
        unique: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, _) => {
    return queryInterface.dropTable("doctor_specialty");
  },
};
