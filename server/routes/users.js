require("dotenv").config();
const express = require("express");
const router = express.Router();
const knex = require("../knex");

const bcrypt = require("bcrypt-as-promised");
const jwt = require("jsonwebtoken");

const createError = require("../common/create-error");

// const setCookie = require("../common/set-cookie");
// const saveAvatar = require("../common/avatars").saveAvatar;
// const createError = require("../common/error-handler");
// const authorizeUser = require("../common/authorize");

// const userManager = require("../common/user-management");

function setCookie(claim, res, router) {
  const token = jwt.sign(claim, process.env.JWT_KEY, { expiresIn: "30 days"} );

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),  // 30 days
    secure: router.get("env") === "production"
  });
}

function authorizeUser(req, res, next) {
  if (!req.cookies || !req.cookies.token) { return next(createError(401, "No cookie set")); }
  
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
    if (err) { return next(createError(401, "Unauthorized")); }
    
    req.claim = payload;
    
    next();
  });
}

// router.get("/users", authorizeUser, (req, res, next) => {
//   const userId = parseInt(req.claim.userId);

//   console.log(userId);

//   if (isNaN(userId) || userId < 0) { return next("Invalid User ID"); }

//   knex("users")
//     .where("id", userId)
//     // .select(["id", "email"])
//     .first()
//     .then((result) => {
//       res.send(true);
//     })
//     .catch((err) => {
//       return next(err);
//     });

// });

router.patch("/users", (req, res, next) => {
  let data = {};
  const userId = parseInt(req.claim.userId);
  
  if (isNaN(userId) || userId < 0) { return next(createError(400, "Invalid User ID")); }

  if (req.body.username) {
    if (req.body.username.length < 4) { return next(createError(400, "Username must be at least 4 characters long")); }
    else if (req.body.username.length > 20) { return next(createError(400, "Username must be 20 character or less")); }
    else if (req.body.username.match(/\W/g)) { return next(createError(400,"Username contains invalid characters")); }
    data.username = req.body.username;
  }
  if (req.body.password) {
    if (req.body.password.length < 4) { return next(createError(400, "Password must be at least 4 characters long")); }
  }
  if (req.body.email) {
    if (req.body.email.length < 6) { return next(createError(400, "Email must be at least 5 characters long")); }
    else if (req.body.email.match(/[^0-9a-z@.-]/ig)) { return next(createError(400, "Email contains invalid characters")); }    
    data.email = req.body.email.toLowerCase();
  }
  if (req.body.avatar) {
    if (req.body.avatar.length !== 6) { return next(createError(400, "Invalid avatar")); }      
    data.avatar = req.body.avatar;
  }

  data.id = userId;


  checkUserOrEmailExists(data.username, data.email)
    .then((result) => {
      if (result !== false) {
        throw createError(400, "Username or email address already exists");
      }

      const promises = [];

      if (req.body.password) {
        promises.push(bcrypt.hash(req.body.password, 12));
      }
      else {
        promises.push(new Promise((resolve, reject) => { resolve(null); }));
      }

      if (data.avatar) {
        promises.push(saveAvatar(data.avatar, data.id));
      }

      return Promise.all(promises);
    })
    .then((result) => {
      if (result[0]) {
        data.hashed_password = result[0];
      }
      return knex("users").update(data).where("id", data.id).returning("*");
    })
    .then((result) => {
      result = result[0];
      setCookie({ userId: result.id, username: result.username }, res, router);
      delete result.hashed_password;
      
      userManager.changedProfile(result);
      res.send(result);     
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/users", (req, res, next) => {
  if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname) { return next(createError(400, "Invalid parameters")); }
  if (req.body.password.length < 4) { return next(createError(400, "Password must be at least 4 characters long")); }
  if (req.body.email.length < 6) { return next(createError(400, "Email must be at least 5 characters long")); } 
  if (req.body.email.match(/[^0-9a-z@.-]/ig)) { return next(createError(400, "Email contains invalid characters")); }

  const userData = {};

  checkEmailExists(req.body.email.toLowerCase())
    .then((result) => {
      if (result != false) {
        throw createError(400, "Email address already exists");
      }
    })
    .then(() => {
      userData.firstname = req.body.firstname;
      userData.lastname = req.body.lastname;
      userData.email = req.body.email.toLowerCase();
      userData.password = req.body.password;
      userData.is_admin = false;
    })
    .then(() => {
      return bcrypt.hash(userData.password, 12);
    })
    .then((hashed_password) => {
      delete userData.password;
      userData.hashed_password = hashed_password;

      return knex("users").insert(userData).returning(["id", "firstname", "lastname", "email"]);
    })
    .then((result) => {
      result = result[0];
      setCookie({ userId: result.id, username: result.username }, res, router);
      
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
});

function checkEmailExists(email) {
  return knex("users").where("email", email)
    .then((result) => {
      if (result.length > 0) {
        return true;
      }
      else {
        return false;
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      return true;
    });
  // let queryString = "";

  // if (username && email) {
  //   queryString = `SELECT * FROM users WHERE LOWER(username) = LOWER('${username}') OR email = '${email}';`;
  // }
  // else if (username) {
  //   queryString = `SELECT * FROM users WHERE LOWER(username) = LOWER('${username}');`;    
  // }
  // else if (email) {
  //   queryString = `SELECT * FROM users WHERE email = '${email}';`;    
  // }
  
  // if (queryString) {
  //   return knex.raw(queryString)
  //     .then((result) => {
  //       if (result.rows.length > 0) {
  //         return true;
  //       }
  //       return false;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return null;
  //     });
  // }
  // return Promise.resolve(false);
}

module.exports = router;