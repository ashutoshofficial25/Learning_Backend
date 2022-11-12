const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controller/category.controller");

categoryRouter.get("/", categoryController.getAllCategory);

categoryRouter.get("/:categoryId", categoryController.getCategoryById);

categoryRouter.post("/", categoryController.addNewCategory);
categoryRouter.delete("/:categoryId", categoryController.deleteCategoryById);

module.exports = categoryRouter;
