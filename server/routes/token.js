require("dotenv").config();
const express = require("express");
const router = express.Router();
const knex = require("../knex");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-as-promised");

const createError = require("../common/create-error");
const setCookie = require("../common/set-cookie");

router.get("/token", (req, res, next) => {
  if (!req.cookies || !req.cookies.token) { return res.send(false); }

  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
    if (err) { return res.send(false); }

    res.send(true);
  });
});

router.delete("/token", (req, res, next) => {
  res.clearCookie("token");
  res.end();
});

router.post("/token", (req, res, next) => {
  if (!req.body.email || !req.body.password) { return next(createError(400, "No email or password provided")); }

  let user = {};
  
  user.email = req.body.email.toLowerCase();
  user.password = req.body.password;

  knex("users")
    .where("email", user.email)
    .first()
    .then((result) => {
      if (!result) { throw createError(401, "Bad email or password"); }
      user.id = result.id;
      user.username = result.username;
      user.avatar = result.avatar;

      return bcrypt.compare(user.password, result.hashed_password);
    })
    .then(() => {
      delete user.password;

      setCookie({ userId: user.id, username: user.username }, res, router);
      res.send(user);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      return next(createError(401, "Bad email or password"));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;