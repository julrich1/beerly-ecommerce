const express = require("express");
const router = express.Router();
const knex = require("../knex");

router.get("/products", (req, res, next) => {
  knex("products")
    .then((response) => {
      if (response.length) {
        res.send(response);
      }
      else {
        res.send("No products found");
      }
    });
});

router.get("/products/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id < 0) { return next("Invalid product id"); }

  knex("products").where("id", id)
    .then((response) => {
      if (response.length) {
        res.send(response[0]);
      }
      else {
        res.send("No product found");
      }
      // console.log("Product: ", response);
    });
});

router.get("/products/category/:category", (req, res, next) => {
  const category = req.params.category;

  // if (isNaN(id) || id < 0) { return next("Invalid product id"); }

  knex("products").where("category", category)
    .then((response) => {
      if (response.length) {
        res.send(response);
      }
      else {
        res.send([]);
      }
      // console.log("Product: ", response);
    });
});

module.exports = router;