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

    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if(!limit){
        limit = 5;
    }

    if(!offset){
        offset = 0;
    }

    const posts = await findAllService(offset, limit);
    const total = await countNews();
    const currentUrl = req.baseUrl;

    const next = offset+limit;
    const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;
    const previus = offset - limit < 0 ? null : offset - limit;
    const previusUrl = previus != null ? `${currentUrl}?limit=${limit}&offset=${previus}` : null;


    if(posts.length === 0){
        return res.status(400).send({ msg: 'Não há nenhum post feito'});
    }

    res.send({
        nextUrl,
        previusUrl,
        limit,
        offset,
        total,
        results: posts.map(item => ({
            id: item._id,
            title: item.title,
            text : item.text,
            banner: item.banner,
            likes: item.likes,
            comments: item.comments,
            name: item.user.username,
            avatar: item.user.avatar
        }))
    });
}

export { created, findAll }