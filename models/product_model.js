const mongoose = require("mongoose");
const db = require("../config/db");
const { Double } = require("mongodb");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  productPrice: {
    type: String,
    require: true,
  },
});
const ProductModel = db.model("product", productSchema);
module.exports = ProductModel;
