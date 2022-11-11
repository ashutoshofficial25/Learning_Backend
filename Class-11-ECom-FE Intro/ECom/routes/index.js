const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: "nothig",
  });
});

router.get("/categories", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: "all categories are there",
  });
});

router.get("/category/:categoryId", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: req.params.categoryId,
  });
});

module.exports = router;
