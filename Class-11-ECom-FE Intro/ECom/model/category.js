const sequelize = require("sequelize");

const dbConnection = require("../config/db.config");

const Category = dbConnection.define(
  "categories",
  {
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
  },
  { timestamps: true }
);

// Category.sync({ alter: true });
module.exports = Category;
