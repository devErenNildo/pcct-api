import Post from "../models/Post.js";

const createdService = (body) => Post.create(body);

const findAllService = () => Post.find().sort({_id: -1}).populate('user');

const countNews = () => Post.countDocuments();

const likePostService = (idPost, userId) => Post.findOneAndUpdate(
    {
        _id: idPost,
        'likes.userId': {
            $nin: [userId]
        }
    },
    {
        $push: {
            likes: {
                userId,
                created: new Date()
            }
        }
    }
)

const deleteLikePostService = (idPost, userId) => Post.findOneAndUpdate(
    {
        _id: idPost
    },
    {
        $pull: {
            likes: {
                userId
            }
        }
    }
)

export { createdService, findAllService, countNews, likePostService, deleteLikePostService }
