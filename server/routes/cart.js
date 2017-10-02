const express = require("express");
const router = express.Router();
const knex = require("../knex");

const authorizeUser = require("../common/authorize");

router.post("/cart", authorizeUser, (req, res, next) => {
  // TO-DO: Verification of req.body for product

  console.log(req.body);

  const cartProduct = { user_id: req.claim.userId, product_id: req.body.id, quantity: 1 };

  knex("carts").insert(cartProduct)
    .then((result) => {
      res.send(result[0]);
    });
});

router.get("/cart", authorizeUser, (req, res, next) => {
  knex("carts").where("user_id", req.claim.userId).innerJoin("products", "products.id", "carts.product_id")
    .then((result) => {
      console.log(result);
      res.send(result);
    });
});

router.delete("/cart/:id", authorizeUser, (req, res, next) => {
  const productId = parseInt(req.params.id);
  if (isNaN(productId || productId < 0)) { next("Invalid product Id"); }

  console.log("Product ID:", productId, "User ID:", req.claim.userId);
  
  knex("carts").where("user_id", req.claim.userId).andWhere("product_id", productId).delete()
    .then((result) => {
      return knex("carts").where("user_id", req.claim.userId).innerJoin("products", "products.id", "carts.product_id");
    })
    .then((result) => {
      console.log(result);
      res.send(result);
    });
});

module.exports = router;