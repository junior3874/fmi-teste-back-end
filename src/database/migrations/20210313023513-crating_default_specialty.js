"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("specialty", [
      {
        nome: "ALERGOLOGIA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "ANGIOLOGIA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "BUCO MAXILO",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "CARDIOLOGIA CLÍNICA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "CARDIOLOGIA INFANTIL",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "CIRURGIA CABEÇA E PESCOÇO",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "CIRURGIA CARDÍACA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "CIRURGIA DE TÓRAX",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("specialty");
  },
};
