const express = require("express");
const router = express.Router();
const categoryRoutes = require("./categories.route");
const productRoutes = require("./products.route");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: "nothig",
  });
});

router.use("/categories", categoryRoutes);
router.use("/product", productRoutes);

module.exports = router;
