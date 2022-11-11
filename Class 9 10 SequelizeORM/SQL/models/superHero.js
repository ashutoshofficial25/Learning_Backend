let sequelizeInstance = require("../connection");
const sequelize = require("sequelize");

let SuperHero = sequelizeInstance.define(
  "superHero",
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
    power: {
      type: sequelize.DataTypes.BIGINT,
      allowNull: false,
    },
    comics: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = SuperHero;
