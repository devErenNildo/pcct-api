import { createdService, findAllService, likePostService, deleteLikePostService, commentPostService, deletePostService, byUserService } from "../services/post.service.js";
import { ObjectId } from "mongoose";

const created = async (req, res) => {
    try{

        const { user, title, text } = req.body;
        const file = req.file;

        if(!user || !title || !text) {
            return res.status(400).send({
                message: "Submeta todos os campos da publicação"
            });
        }

        await createdService({
            user,
            src: file.path,
            title,
            text
        });

        res.status(200).send({message: "publicaçaõ feita com sucesso"});

    } catch (e) {
        res.status(500).send(e.message);
    }
}

const findAll = async (req, res) => {

    const posts = await findAllService();

    res.send(posts);
}

const byUser = async (req, res) => {
    try {
        
        const { id } = req.params;
        const news = await byUserService(id);
        return res.send(news);

    } catch (error) {
        res.status(500).send({ msg: error.message})
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
    

        await deletePostService(id);

        return res.send({ msg: 'Post deletado com sucesso'});
    } catch (error) {
        res.status(500).send({ msg: error.message});
    }
}

const addLikePost = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    const addLike = await likePostService(id, userId);

    if(!addLike){
        await deleteLikePostService(id, userId);
        return res.status(200).send({ msg: 'like removido'});
    }

    res.status(200).send({ msg: 'like adicionado'});
}

const addCommentPost = async (req, res) => {
    const { id } = req.params;
    const { userId, comment, username, src } = req.body;

    if(!comment){
        return res.status(400).send({ msg: 'escreva um comentário'});

    }

    await commentPostService(id, comment, userId, username, src)
    
    res.send({ msg: 'comentário adicionado'});
}

export { created, findAll, addLikePost, addCommentPost, deletePost, byUser }