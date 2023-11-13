import PostPictures from "../models/PostPictures.js";

// const getUsers = () => User.find;

const createPostService = (body) => PostPictures.create(body);

const getAllPostsImage = () => PostPictures.find().sort({_id: -1}).populate('user');

export { getAllPostsImage, createPostService};