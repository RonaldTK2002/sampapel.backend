const firebase = require("../utils/Firebase");
const jwt = require("jsonwebtoken");
const UserModel = require('../models/UserModel')

module.exports = {
  async signIn(request, response) {
    try {
        const {email,password} = request.body;

        let uid;
        try{
          uid = await firebase.login(email,password);

        }catch(error){
            console.log(error)
            return response.status(403).json({notification:"Invalid credentials"})

        }

        const user = await UserModel.getByFields({firebase_id:uid});

        const accessToken = jwt.sign({user},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"30d"})
    
        return response.status(200).json({user,accessToken})
    }

     catch (error) {
      return response
        .status(500)
        .json({ notification: "Error while trying to validate credenteials" });
    }
  }
}
