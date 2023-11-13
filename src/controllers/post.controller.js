import { createdService, findAllService, countNews, likePostService, deleteLikePostService } from "../services/post.service.js";
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

export { created, findAll, addLikePost }