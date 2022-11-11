const sequelize = require("sequelize");

const dbConnection = require("../config/db.config");

const CategoryModel = dbConnection.define("categories", {
  id: {
    primaryKey: true,
    notNull: true,
    autoIncrement: true,
    type: sequelize.DataTypes.BIGINT,
  },
  name: {
    notNull: true,
    type: sequelize.DataTypes.STRING,
  },
});

module.exports = CategoryModel;
