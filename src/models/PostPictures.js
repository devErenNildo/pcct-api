import mongoose from "mongoose";

const PostPictureSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name:{
        type: String,
        required: true
    },
    src:{
        type: String,
        required: true
    }
});

const PostPictures = mongoose.model("PostPictures", PostPictureSchema);

export default PostPictures;

