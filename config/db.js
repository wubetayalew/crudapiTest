require("dotenv").config();
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/crudapiDB";
const mongodbAtlasUrl2 = process.env.DB_CONNECTION_STRING;
const connection = mongoose.connection;
mongoose.connect(mongodbAtlasUrl2);

connection.on("open", function () {
  console.log("connected...");
});
module.exports = connection;
