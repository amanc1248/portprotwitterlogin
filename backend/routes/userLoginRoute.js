const express = require("express");
const passport = require("passport");
const router = express.Router();

router.route("/auth/twitter").get(passport.authenticate("twitter"));

module.exports = router;
