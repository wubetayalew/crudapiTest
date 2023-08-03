const mongoose = require("mongoose");
const db = require("../config/db");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  tech: {
    type: String,
    require: true,
  },
  sub: {
    type: Boolean,
    require: true,
    defult: false,
  },
});
const UserModel = db.model("user", userSchema);
module.exports = UserModel;
