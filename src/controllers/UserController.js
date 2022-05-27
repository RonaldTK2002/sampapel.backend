const UserModel = require("../models/UserModel");
const firebase = require("../utils/Firebase");

module.exports = {
  async create(request, response) {
    try {
      const user = request.body;

      const uid = await firebase.createNewUser(user.email, user.password);

      delete user.password;
      user.firebase_id = uid;

      const result = await UserModel.create(user);

      return response.status(200).json({user_id:result });
    } catch (error) {
      console.log("User creation failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to create User",
      });
    }
  },
  async getByFields(request, response) {
    try {
      const fields = request.query;

      const result = await UserModel.getByFields(fields);

      return response.status(200).json(result);
    } catch (error) {
      console.log("User get failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to get User",
      });
    }
  },
  async getById(request,response){
    try {
      const {user_id} = request.query;

      const result = await UserModel.getById(user_id);

      return response.status(200).json(result);
    } catch (error) {
      console.log("User get failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to get User",
      });
    }
  },
  async update(request, response) {
    try {
      const { user_id } = request.params;
      const user = request.body;

      const result = await UserModel.updateById(user_id, user);
      if (result != 0)
      return response.status(200).json({notification:"User updated succesfully"});
      else return response.status(400).json({notification:"User_id not found"})
    } catch (error) {
      console.log("User update failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to update User",
      });
    }
  },
  async delete(request, response) {
    try {
      const { user_id } = request.params;
      const result = await UserModel.deleteById(user_id);
      if (result != 0)
        return response
          .status(200)
          .json({ notification: "User deleted succesfully" });
      else
        return response.status(404).json({ notification: "User_id not found" });
    } catch (error) {
      console.log("User deletion failed: " + error);

      return response.status(500).json({
        notification: "Internal server error while trying to delete User",
      });
    }
  },
};
