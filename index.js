require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/db");
const app = express();
const mainRouter = require("./routes/main_route");
const bodyParser = require("body-parser");
// app.use("/", mainRouter);

// app.listen(9000, function () {
//   console.log("server started");
// });

(async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    const connection = mongoose.connection;
    console.log("Connected to the database...");
    app.use("/", mainRouter);
    app.listen(9000, function () {
      console.log("Server started");
    });
    module.exports = connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();
