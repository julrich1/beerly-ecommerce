const API_ROUTE = "/api/";

const knex = require("./knex");
const express = require("express");
const app = express();

const usersRoute = require("./routes/users");
const tokenRoute = require("./routes/token");
const productsRoute = require("./routes/products");
const cartRoute = require("./routes/cart");
const ordersRoute = require("./routes/orders");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(bodyParser.json());

app.use(API_ROUTE, usersRoute);
app.use(API_ROUTE, tokenRoute);
app.use(API_ROUTE, productsRoute);
app.use(API_ROUTE, cartRoute);
app.use(API_ROUTE, ordersRoute);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use((err, req, res, next) => {
  console.log("Error: ", err);
  res.sendStatus(500);
});

app.listen(8000, () => {
  console.log("Listening");
});