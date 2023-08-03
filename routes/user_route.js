const express = require("express");
const router = express.Router();
bodyParser = require("body-parser").json();
const UserModel = require("../models/user_model");
const UserController = require("../controller/user_controller");

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.send("Error" + error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.send("Error" + error);
  }
});
router.patch("/:id", bodyParser, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    user.sub = req.body.sub;
    const u1 = await user.save();
    res.json(u1);
  } catch (error) {
    res.send("Error" + error);
  }
});
router.delete("/:id", bodyParser, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const u1 = await user.deleteOne();
    res.json(u1);
  } catch (error) {
    res.send("Error" + error);
  }
});
// router.post("/register", UserController.register);
router.post("/", bodyParser, async (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    tech: req.body.tech,
    sub: false,
  });
  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (error) {
    res.send("Error" + error);
  }
});

module.exports = router;
