// require("dotenv").config();
// const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/crudapiDB";
// const mongodbAtlasUrl2 = process.env.DB_CONNECTION_STRING;
// const connection = mongoose.connection;
// mongoose.connect(mongodbAtlasUrl2);

// connection.on("open", function () {
//   console.log("connected...");
// });
// module.exports = connection;
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {});
    console.log("Connected to the database...");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

module.exports = connectDB;
