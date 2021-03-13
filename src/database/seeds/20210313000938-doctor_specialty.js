"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("doctor_specialty", [
      {
        doctor_id: 1,
        specialty_id: 1,
      },
      {
        doctor_id: 1,
        specialty_id: 2,
      },
      {
        doctor_id: 2,
        specialty_id: 1,
      },
      {
        doctor_id: 2,
        specialty_id: 2,
      },
      {
        doctor_id: 3,
        specialty_id: 1,
      },
      {
        doctor_id: 3,
        specialty_id: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("doctor_specialty", null, {});
  },
};
