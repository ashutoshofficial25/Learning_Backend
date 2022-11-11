const sequelize = require("sequelize");

let sequelizeInstance = new sequelize("ecomm_db", "root", "Mysql@shu1", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelizeInstance;
