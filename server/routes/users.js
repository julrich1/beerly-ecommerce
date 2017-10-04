require("dotenv").config();
const express = require("express");
const router = express.Router();
const knex = require("../knex");

const bcrypt = require("bcrypt-as-promised");
const jwt = require("jsonwebtoken");

const createError = require("../common/create-error");
const authorizeUser = require("../common/authorize");

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

router.get("/users", authorizeUser, (req, res, next) => {
  knex("users")
    .where("id", req.claim.userId)
    // .select(["id", "email"])
    .first()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return next(err);
    });

});

router.patch("/users", authorizeUser, (req, res, next) => {
  let data = req.body;

  // TO-DO: Better validation here - Make sure users cannot pass params outside of scope.
  data.id = req.claim.userId;

  // checkUserOrEmailExists(data.username, data.email)
  // .then((result) => {
  // if (result !== false) {
  //   throw createError(400, "Username or email address already exists");
  // }

  // const promises = [];

  // if (req.body.password) {
  //   promises.push(bcrypt.hash(req.body.password, 12));
  // }
  // else {
  //   promises.push(new Promise((resolve, reject) => { resolve(null); }));
  // }

  // return Promise.all(promises);
  // })
  // .then((result) => {
  // if (result[0]) {
  // data.hashed_password = result[0];
  // }

  knex("users").update(data).where("id", data.id).returning("*")
    .then((result) => {
      result = result[0];
      // setCookie({ userId: result.id, username: result.username }, res, router);
      delete result.hashed_password;
      
      // userManager.changedProfile(result);
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