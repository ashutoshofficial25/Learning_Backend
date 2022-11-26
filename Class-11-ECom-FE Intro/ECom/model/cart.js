const Sequelize = require("sequelize");
const sequelizeInstance = require("../config/db.config");

const Cart = sequelizeInstance.define(
  "cart",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cost: {
      type: Sequelize.DataTypes.DECIMAL,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Cart;
