const sequelize = require("sequelize");

const sequelizeInstance = new sequelize("ecom", "root", "Mysql@shu1", {
  host: "localhost",
  dialect: "mysql",
  operatorsAlieases: 0,
  pool: {
    mun: 0,
    max: 5,
    aquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelizeInstance;
