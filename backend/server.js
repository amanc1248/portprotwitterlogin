const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");
const passportsetup = require("./middleware/twitterMiddleware");
const userLoginRoutes = require("./routes/userLoginRoute");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
// initializing passport
app.use(passport.initialize());
// for persistent logins
app.use(passport.session());

// app.use("/api", userLoginRoutes);
app.get("/api/auth/twitter", passport.authenticate("twitter"), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
});
app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.header("Access-Control-Allow-Origin", "*");
    res.redirect("/");
  }
);
app.get("/api", (req, res) => {
  res.send("Api is running");
});

app.listen(PORT, console.log("server is running"));
