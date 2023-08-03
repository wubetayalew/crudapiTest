const express = require("express");
bodyParser = require("body-parser");
const app = express();

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());
const UserService = require("../service/user_service");
bodyParser = require("body-parser").json();
exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const successREs = await UserService.registerUser(email, password);
    res.json({ satatus: true, success: "user registerd sucessfully" });
  } catch (error) {
    res.send("Error" + error);
  }
};
