const { Router } = require("express");
const { body } = require("express-validator");

const router = Router();
const authController = require("../controllers/auth");

// create new user
// POST - /register
router.post(
  "/register",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name must have!")
      .isLength({ min: 3 })
      .withMessage("Name must have at least three characters!"),
    body("password").trim().notEmpty().withMessage("Password must have!"),
    body("email").trim().isEmail().withMessage("Enter valid email address!"),
  ],
  authController.register
);

// login user
// POST - /login
router.post(
  "/login",
  [
    body("password").trim().notEmpty().withMessage("Password must have!"),
    body("email").trim().isEmail().withMessage("Enter valid email address!"),
  ],
  authController.login
);

module.exports = router;
