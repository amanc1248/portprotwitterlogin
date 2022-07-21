const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./middleware/googleMiddleware");
const passport = require("passport");
const authRoute = require("./routes/googleRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/api/users", userRoutes);
app.listen("3001", () => {
  console.log("Server is running!");
});
