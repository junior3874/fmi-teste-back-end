"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("doctor", [
      {
        nome: "Antonio Gilberto 0",
        crm: "0000000",
        cep: "05736200",
        telefone_fixo: "1142653594",
        telefone_celular: "00000000000",
        rua: "Rua Comediante Zacarias",
        bairro: "Jardim São Roque",
        localidade: "São Paulo",
        uf: "São Paulo",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Antonio Gilberto 1",
        crm: "0000001",
        cep: "05736200",
        telefone_fixo: "1142653594",
        rua: "Rua Comediante Zacarias",
        bairro: "Jardim São Roque",
        localidade: "São Paulo",
        uf: "São Paulo",
        telefone_celular: "00000000001",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Antonio Gilberto 2",
        crm: "0000002",
        cep: "05736200",
        telefone_fixo: "1142653594",
        rua: "Rua Comediante Zacarias",
        bairro: "Jardim São Roque",
        localidade: "São Paulo",
        uf: "São Paulo",
        telefone_celular: "00000000002",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("doctor", null, {});
  },
};
