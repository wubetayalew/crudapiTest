const express = require("express");
const db = require("../config/db");
const app = express();
const productRouter = require("./product_route");
const userRouter = require("./user_route");

app.use("/product", productRouter);
app.use("/user", userRouter);
module.exports = app;
