const sequelize = require("sequelize");
const sequelizeInstance = require("../connection");

let Categories = sequelizeInstance.define(
  "categories",
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
    description: sequelize.DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
