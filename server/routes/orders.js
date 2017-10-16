const express = require("express");
const router = express.Router();
const knex = require("../knex");

const authorizeUser = require("../common/authorize");
const clearCart = require("../common/cart");

router.post("/orders", authorizeUser, (req, res, next) => {
  // TO-DO: Better validation here. Products should be pulled from the DB instead of trusting client.

  const user = req.body.user;
  user.user_id = req.claim.userId;

  delete user.id;
  delete user.email;

  const subtotal = req.body.cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  user.shipping_total = 13.00;
  user.tax =  0.097 * subtotal;
  user.total = subtotal + user.tax + user.shipping_total;

  let orderId = 0;

  knex("orders").insert(user).returning("id")
    .then((result) => {
      orderId = result[0];
      const products = req.body.cart.map((product) => { 
        const newProduct = { product_id: product.id, order_id: orderId, quantity: product.quantity, price: product.price };
        return newProduct;
      });

      return knex("orders_products").insert(products);
    })
    .then((result) => {
      clearCart(req.claim.userId);
      res.send({orderId: orderId});
    });
});

router.get("/orders", authorizeUser, (req, res, next) => {
  knex("orders").where("user_id", req.claim.userId)
    .then((result) => {

      res.send(result);
    });
});

router.get("/orders/:id", authorizeUser, (req, res, next) => {
  // TO-DO: Add checking of user ID to make sure users can only see their orders.
  const orderId = parseInt(req.params.id);

  if (isNaN(orderId) || orderId < 0) { next("Invalid order ID"); }

  let orderDetail = {};

  knex("orders").where("id", orderId)
    .then((result) => {
      orderDetail = result[0];
      return knex("orders_products").where("order_id", orderId).innerJoin("products", "orders_products.product_id", "products.id");
    })
    .then((result) => {
      orderDetail.products = result;
      res.send(orderDetail);
    });
});

module.exports = router;