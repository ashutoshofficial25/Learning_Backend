const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controller/category.controller");

categoryRouter.get("/", categoryController.getAllCategory);

categoryRouter.get("/:categoryId", categoryController.getCategoryById);

module.exports = categoryRouter;
