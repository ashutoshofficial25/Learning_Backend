const express = require("express");
const productRouter = express.Router();
const productController = require("../controller/products.controller");
productRouter.get("/", productController.getAllProducts);

productRouter.get("/:productId", productController.getProductById);

productRouter.post("/", productController.addNewProduct);

productRouter.put("/:productId", productController.updateProductById);

productRouter.delete("/:productId", productController.deleteProductById);

module.exports = productRouter;
