import { findById } from "../controllers/user.controller.js";
import User from "../models/User.js";

const createUser = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background 
) => 
    User.findOneAndUpdate({_id: id}, {
        name,
        username,
        email,
        password,
        avatar,
        background
    });

export {createUser, findAllService, findByIdService, updateService };