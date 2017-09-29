const knex = require("./knex");
const express = require("express");
const app = express();

const usersRoute = require("./routes/users");
const tokenRoute = require("./routes/token");
const productsRoute = require("./routes/products");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/", usersRoute);
app.use("/api/", tokenRoute);
app.use("/api/", productsRoute);

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