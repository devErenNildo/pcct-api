import User from "../models/User.js";

const getUsers = () => User.find;

export {getUsers};