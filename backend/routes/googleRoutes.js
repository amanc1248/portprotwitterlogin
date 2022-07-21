const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/signup";
router.route("/login/success").get((req, res) => {
  console.log(req.user);
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.route("/login/failed").get((req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.route("/logout").get((req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
