import Post from "../models/Post.js";

const createdService = (body) => Post.create(body);

const findAllService = (offset, limit) => Post.find().sort({_id: -1}).skip(offset).limit(limit).populate("user");

const countNews = () => Post.countDocuments();

export { createdService, findAllService, countNews }
