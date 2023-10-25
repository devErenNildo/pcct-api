import mongoose from "mongoose";

const PictureScheme = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    name: {
        type: String,
        require: true
    },
    src: {
        type: String,
        require: true
    }
});

const FundoPictures = mongoose.model("FundoPictures", PictureScheme);

export default FundoPictures;