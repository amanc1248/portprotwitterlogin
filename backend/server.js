const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.get("/api", (req, res) => {
  res.send("Api is running");
});

app.listen(PORT, console.log("server is running"));
