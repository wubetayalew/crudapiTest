const express = require("express");
const router = express.Router();
bodyParser = require("body-parser").json();
const ProductModel = require("../models/product_model");

router.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.send("Error" + error);
  }
});

router.post("/", bodyParser, async (req, res) => {
  const product = new ProductModel({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
  });
  try {
    const p1 = await product.save();
    res.json(p1);
  } catch (error) {
    res.send("Error" + error);
  }
});

module.exports = router;
