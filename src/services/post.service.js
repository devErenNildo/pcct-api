import Post from "../models/Post.js";

const createdService = (body) => Post.create(body);

const findAllService = () => Post.find().sort({_id: -1}).populate('user');

const countNews = () => Post.countDocuments();

export { createdService, findAllService, countNews }
