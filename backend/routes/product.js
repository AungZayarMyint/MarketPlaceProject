const { Router } = require("express");
const { body } = require("express-validator");

const productController = require("../controllers/product");
const authMiddleware = require("../middlewares/auth");

const router = Router();

// add product
// POST - /create
router.post(
  "/create-product",
  authMiddleware,
  [
    body("product_name")
      .trim()
      .notEmpty()
      .withMessage("Product name must have"),
    body("product_description")
      .trim()
      .notEmpty()
      .withMessage("Product description must have"),
    body("product_price")
      .trim()
      .notEmpty()
      .withMessage("Product price must have"),
    body("product_category")
      .trim()
      .notEmpty()
      .withMessage("Product category must have"),
    body("product_used_for")
      .trim()
      .notEmpty()
      .withMessage("Product usedFor must have"),
    body("product_details").isArray().withMessage("Product details must array"),
  ],

  productController.addNewProduct
);

module.exports = router;
