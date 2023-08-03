require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/db");
const app = express();
const mainRouter = require("./routes/main_route");
const bodyParser = require("body-parser");
app.use("/", mainRouter);

app.listen(9000, function () {
  console.log("server started");
});
