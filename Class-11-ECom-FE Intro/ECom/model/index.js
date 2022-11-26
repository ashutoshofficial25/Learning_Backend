let db = {};

db.roles = require("./role");
db.user = require("./user");
db.cart = require("./cart");
db.product = require("./product");

db.roles.belongsToMany(db.user, {
  through: "user_roles", // create inner-join || creting a new table
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.product.belongsToMany(db.cart, {
  through: "cart_proucts",
  foreignKey: "productId",
  otherKey: "cartId",
});

db.cart.belongsToMany(db.product, {
  through: "cart_proucts",
  foreignKey: "cartId",
  otherKey: "productId",
});

db.Roles = ["user", "admin"];

module.exports = db;
