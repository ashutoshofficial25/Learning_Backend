const sequelize = require("sequelize");

const dbConnection = require("../config/db.config");

const Products = dbConnection.define(
  "products",
  {
    id: {
      type: sequelize.DataTypes.INTEGER,
      notNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      notNull: true,
      type: sequelize.DataTypes.STRING,
    },
    price: {
      notNull: true,
      type: sequelize.DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

// CategoryModel.hasMany(Products);
// Products.sync({ alter: true });

module.exports = Products;
