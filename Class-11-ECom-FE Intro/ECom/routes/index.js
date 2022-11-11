const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category.controller");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: "nothig",
  });
});

router.get("/categories", categoryController.getAllCategory);

router.get("/category/:categoryId", categoryController.getCategoryById);

module.exports = router;
