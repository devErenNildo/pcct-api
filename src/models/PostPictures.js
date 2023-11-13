import mongoose from "mongoose";

const PostPictureSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    src:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    likes: {
        type: Array,
        required: true,
    },
    comments: {
        type: Array,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const PostPictures = mongoose.model("PostPictures", PostPictureSchema);

export default PostPictures;

