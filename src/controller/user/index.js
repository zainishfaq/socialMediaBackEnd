import UserModel from "../../model/user/index.js";

const UserController = {
    create: async (req,res)=> {
    const payload= req.body;

    const user= await UserModel.create(
        {
            name: payload.name,
            email:payload.email,
            password: payload.password


        }

    );
    res.json({
        message: "User created",
        user,
      });
    } 
}