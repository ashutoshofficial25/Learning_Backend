const Categories = require("../models/Category");
const sequelizeInstance = require("../connection");
// table doesn't exist then create first

async function createTable() {
  await sequelizeInstance.sync({ force: true });
  console.log("table creted successfully");
  insertCategories();
  findAll();
}

async function insertCategories() {
  await Categories.bulkCreate([
    {
      name: "mobile phones",
      description: "this is mobile section",
    },
    {
      name: "tv",
      description: "this is tv section",
    },
    {
      name: "laptops",
      description: "this is laptops section",
    },
  ]);
}
async function findAll() {
  let selected = await Categories.findAll({
    where: {
      id: 1,
    },
  });
  console.log("log:",selected)
  const categories = await Categories.findAll({
    distnict: true,
    col: "id",
  });
  console.log(categories);
}

createTable();
