require("dotenv").config();

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    define: {
      timestamps: true,
      underscored: true,
      paranoid: true,
    },
  },
  test: {
    dialect: process.env.TEST_DB_DIALECT,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    define: {
      timestamps: true,
      underscored: true,
      paranoid: true,
    },
  },
};
