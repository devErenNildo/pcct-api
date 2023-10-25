import mongoose from "mongoose";

const WarningSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    turma: {
        type: String,
        required: true
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

const Warning = mongoose.model("Warning", WarningSchema);

export default Warning;
