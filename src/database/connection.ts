const Sequelize = require("sequelize");
const configFile = require("./config");

const config = configFile[process.env.NODE_ENV] || configFile.development;

function Database() {
  const connection = new Sequelize(config);

  return {
    connection,
  };
}

export default Database().connection;
