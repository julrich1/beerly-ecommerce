const express = require("express");
const router = express.Router();
const knex = require("../knex");

const authorizeUser = require("../common/authorize");
const clearCart = require("../common/cart");

router.post("/orders", authorizeUser, (req, res, next) => {
  console.log("POST TO ORDERS", req.body);

  const date = new Date();

  const user = req.body.user;
  user.user_id = req.claim.userId;
  user.order_number = date.getMonth() + date.getDay() + date.getFullYear() + user.user_id + date.getTime();
  user.city = "Seattle";
  delete user.id;
  delete user.email;
  delete user.firstname;
  delete user.lastname;

  let orderId = 0;

  knex("orders").insert(user).returning("id")
    .then((result) => {
      console.log("RESULT: ", result);
      orderId = result[0];
      const products = req.body.cart.map((product) => { 
        console.log(product);
        const newProduct = { product_id: product.id, order_id: orderId, quantity: product.quantity, price: product.price };
        // product.order_id = result.id;
        // product.quantity = 1;
        return newProduct;
      });

      return knex("orders_products").insert(products);
    })
    .then((result) => {
      clearCart(req.claim.userId);
      console.log(result);
      res.send({orderId: orderId});
    });
});

router.get("/orders", authorizeUser, (req, res, next) => {
  let order = [];

  knex("orders").where("user_id", req.claim.userId)
    .then((result) => {
      order = result;
      
      
      console.log("Order history: ", result);
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

// orders
// table.increments();
// table.integer("user_id").references("users.id").onDelete("CASCADE");
// table.integer("order_number").notNullable();
// table.string("address1").notNullable();
// table.string("address2");
// table.string("city").notNullable();
// table.string("state").notNullable();
// table.string("zip").notNullable();
// table.string("country").notNullable();
// table.string("phone").notNullable();
// table.string("status");
// table.decimal("tax_percentage");
// table.timestamps(true, true);    

// orders_products
// table.increments();
// table.integer("order_id").references("orders.id").notNullable();
// table.integer("product_id").references("products.id").notNullable();
// table.integer("quantity").notNullable();
// table.decimal("price").notNullable();