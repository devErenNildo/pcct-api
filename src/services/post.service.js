import Post from "../models/Post.js";

const createdService = (body) => Post.create(body);

const findAllService = () => Post.find().sort({_id: -1}).populate('user');

const byUserService = (id) => Post.find({ user: id}).sort({ _id: -1}).populate('user');

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

const deletePostService = (id) => Post.findOneAndDelete({ _id: id});

const commentPostService = (idPost, comment, userId) => {
    let idComment = Math.floor( Date.now() * Math.random()).toString(36);

    return Post.findOneAndUpdate(
        {
            _id: idPost
        },
        {
            $push: {
                comments: {
                    idComment,
                    userId,
                    comment,
                    createdAt: new Date()
                }
            }
        }
    );
}

export { createdService, findAllService, likePostService, deleteLikePostService, commentPostService, deletePostService, byUserService }
