const Categories = require("../model/category");
const sequelizeInstance = require("../config/db.config");

const createTable = async () => {
  await sequelizeInstance.sync({ force: true });
  console.log("table created");
};
// createTable();

const insertCategories = async () => {
  await Categories.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobiles",
    },
    {
      name: "Elctionics",
    },
    {
      name: "Applinces",
    },
  ]);
};

// insertCategories();

const getAllCategory = async (req, res) => {
  const categories = await Categories.findAll();
  // res.writeHead(200, { "Content-Type": "application/json" });
  res.status(200).json({
    message: "success",
    data: categories,
  });
};

const getCategoryById = (req, res) => {
  res.status(200).json({
    message: "Success",
    data: req.params.categoryId,
  });
};

module.exports = {
  getAllCategory,
  getCategoryById,
};
