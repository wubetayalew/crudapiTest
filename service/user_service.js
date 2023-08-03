const UserModel = require("../models/user_model");
class UserService {
  static async registerUser(email, password) {
    try {
      const createUser = new UserModel({ email, password });
      const u1 = await createUser.save();
      res.json(u1);
    } catch (error) {
      res.send("Error" + error);
    }
  }
}
module.exports = UserService;
