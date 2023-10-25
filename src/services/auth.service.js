import jwt from "jsonwebtoken";
import User from "../models/User.js";

const loginService = async (email) => {
    try{
        const user = await User.findOne({
            email: email
        }).select("+password");
        return user

    }catch(err){
        throw err
    }
}

const generateToken = (id) => {
    return jwt.sign({ id: id}, process.env.Secret_JWT, {expiresIn: 432000});
}

export { loginService, generateToken };