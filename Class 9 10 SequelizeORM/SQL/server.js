const sequelize = require("sequelize");

let sequelizeInstance = new sequelize("ecom", "root", "Mysql@shu1", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
});

let Users = sequelizeInstance.define(
  "users",
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    creted_at: {
      type: sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

async function getAllUsers() {
  let users = await Users.findAll();
  console.log(JSON.stringify(users));
}
getAllUsers();
