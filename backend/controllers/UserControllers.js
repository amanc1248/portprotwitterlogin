const { db } = require("../../database/db.js");
const asyncHandler = require("express-async-handler");
const uniqid = require("uniqid");
// find user controller
const findUserController = async ({ username }) => {
  let sql = `SELECT * FROM USERS WHERE USERNAME=${username}`;
  db.query(sql, [username], (err, result) => {
    if (err) throw err;
    else {
      if (result.length !== 0) {
        return result[0].username;
      }
    }
  });
};

// create new user controller
const createNewUserController = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  let sql = `INSERT INTO USERS VALUES (?,?)`;
  db.query(sql, [username, password], (err, result) => {
    if (err) throw err;
    else {
      if (result) {
        return result;
      }
    }
  });
});

// login user controller
const loginUserController = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  let sql = `
  SELECT * FROM USERS WHERE USERNAME=?;
  `;
  db.query(sql, [username], (err, result) => {
    if (err) throw err;
    else {
      if (result.length !== 0) {
        console.log("we have result");
        console.log(result);
        if (result[0].password === password) {
          // req.session.adminAuthenticated = true;
          // req.session.admin_id = username;
          res.send("success");
        } else {
          res.status(401).send({ message: "Password did not match" });
        }
      } else {
        res.status(401).send({ message: "Invalid Credentials" });
      }
    }
  });
});

module.exports = {
  findUserController,
  loginUserController,
  createNewUserController,
};
