const db = require("../model");
const Categories = db.category;
const sequelizeInstance = require("../config/db.config");

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
  try {
    const categories = await Categories.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({
      message: "Sonething went wrong",
    });
  }
};

const getCategoryById = async (req, res) => {
  const id = req.params.categoryId;
  if (!id) {
    res.status(400).json({
      message: "Please enter valid id",
    });
  }
  const category = await Categories.findAll({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    message: "Success",
    data: category,
  });
};

const addNewCategory = async (req, res) => {
  try {
    const category = await Categories.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      message: "err",
      data: null,
    });
  }
};

const updateCategoryById = async (req, res) => {
  let id = req.params.categoryId;
  if (!id) {
    return res.status(400).json({
      status: "Error",
      message: "Id field is   empty",
    });
  }
  const { name } = req.body;
  try {
    let categoriesToUpdate = {
      name: name,
    };
    await Categories.update(categoriesToUpdate, {
      where: {
        id: id,
      },
    });

    let updateCategory = await Categories.findByPk(id);

    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(200).json({
      message: "Something went wrong",
      data: null,
    });
  }
};

const deleteCategoryById = async (req, res) => {
  const categoryId = req.params.categoryId;
  await Categories.destroy({
    where: {
      id: categoryId,
    },
  });
  res.status(200).json({
    message: "Category deleted",
    data: null,
  });
};

module.exports = {
  getAllCategory,
  getCategoryById,
  addNewCategory,
  deleteCategoryById,
  updateCategoryById,
};
