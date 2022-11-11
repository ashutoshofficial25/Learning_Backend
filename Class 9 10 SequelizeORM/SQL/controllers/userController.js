const Users = require("../models/User");

async function getAllUsers() {
  let users = await Users.findAll();
  console.log(JSON.stringify(users));
}
getAllUsers();
