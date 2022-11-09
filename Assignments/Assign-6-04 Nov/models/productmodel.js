const sequelize = require("sequelize");
const sequelizeInstance = require("../connection");

const Product = sequelizeInstance.define(
  "product",
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: sequelize.DataTypes.BIGINT,
    },
  },
  {
    timeStampa: false,
  }
);

module.exports = Product;
