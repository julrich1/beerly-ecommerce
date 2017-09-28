const knex = require("./knex");
const express = require("express");
const app = express();

const usersRoute = require("./routes/users");

app.use("/api/", usersRoute);

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