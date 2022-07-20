const express = require("express");
const passport = require("passport");
const {
  createNewUserController,
  loginUserController,
} = require("../controllers/UserControllers");
const router = express.Router();

router.route("/signup").post(createNewUserController);
router.route("/login").post(loginUserController);

module.exports = router;
