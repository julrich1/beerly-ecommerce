require("dotenv").config();
const express = require("express");
const router = express.Router();
const knex = require("../knex");

const bcrypt = require("bcrypt-as-promised");

const createError = require("../common/create-error");
const authorizeUser = require("../common/authorize");
const setCookie = require("../common/set-cookie");

router.get("/users", authorizeUser, (req, res, next) => {
  knex("users")
    .where("id", req.claim.userId)
    .first()
    .then((result) => {
      delete result.hashed_password;
      delete result.is_admin;
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

  knex("users").update(data).where("id", data.id).returning("*")
    .then((result) => {
      result = result[0];
      delete result.hashed_password;

      res.send(result);     
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/users", (req, res, next) => {
  if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname) { return next(createError(400, "Invalid parameters")); }
  if (req.body.password.length < 4) { return next(createError(400, "Password must be at least 4 characters long")); }
  if (req.body.email.length < 5) { return next(createError(400, "Email must be at least 5 characters long")); } 
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
}

module.exports = router;