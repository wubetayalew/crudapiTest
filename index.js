require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
// const db = require("./config/db");
const app = express();
const mainRouter = require("./routes/main_route");
const bodyParser = require("body-parser");
// app.use("/", mainRouter);
app.get("/", mainRouter);

const connection = require("./config/db");
app.listen(9000, async () => {
  try {
    await connection;
    console.log("connection to db cloud");
  } catch (err) {
    console.log(err);
  }
  console.log("working on 9000");
});
