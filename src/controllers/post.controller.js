import { createdService, findAllService, countNews } from "../services/post.service.js";
import { ObjectId } from "mongoose";

const created = async (req, res) => {
    try{

        const { title, banner, text } = req.body;

        if(!title || !banner || !text) {
            return res.status(400).send({
                message: "Submeta todos os campos da publicação"
            });
        }

        await createdService({
            title,
            banner,
            text,
            user: req.userId
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

export { created, findAll }