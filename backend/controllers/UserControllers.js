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
  let checkExistUser = `SELECT * FROM USERS WHERE USERNAME=${username};`;
  let insertUser = `INSERT INTO USERS VALUES (?,?)`;
  db.query(checkExistUser, (err, result) => {
    console.log("our result is");
    console.log(result);
    if (result.length === 0) {
      console.log("INSERT USER");
      db.query(insertUser, [username, password], (err, result) => {
        if (err) throw err;
        else {
          if (result) {
            console.log(result);
            res.send("success");
          }
        }
      });
    } else {
      console.log("USER ALREADY EXIST");
      res
        .status(401)
        .send({ message: "User already exist with this username" });
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
        console.log("user Exists");
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
// check if user controller
const checkIfUserExistsController = asyncHandler(async (req, res) => {
  const { id } = req.user;
  console.log(req.user);
  let sql = `
  SELECT * FROM USERS WHERE USERNAME=?;
  `;
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    else {
      if (result.length !== 0) {
        console.log("user Exists");
        console.log(result);
        res.status(200).json({
          success: true,
          message: "failure",
          user: result,
        });
      }
    }
  });
});

module.exports = {
  findUserController,
  loginUserController,
  createNewUserController,
  checkIfUserExistsController,
};
