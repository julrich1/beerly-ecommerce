const API_ROUTE = "/api/";

const path = require("path");

const express = require("express");
const app = express();

const usersRoute = require("./routes/users");
const tokenRoute = require("./routes/token");
const productsRoute = require("./routes/products");
const cartRoute = require("./routes/cart");
const ordersRoute = require("./routes/orders");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(bodyParser.json());

app.use(API_ROUTE, usersRoute);
app.use(API_ROUTE, tokenRoute);
app.use(API_ROUTE, productsRoute);
app.use(API_ROUTE, cartRoute);
app.use(API_ROUTE, ordersRoute);

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.use((err, req, res, next) => {
  console.log("Error: ", err);
  res.sendStatus(500);
});

app.listen(8000, () => {
  console.log(`Listening on port ${port}`);
});