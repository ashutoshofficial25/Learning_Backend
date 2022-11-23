let db = {};

db.roles = require("./role");
db.user = require("./user");

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

db.Roles = ["user", "admin"];

module.exports = db;
