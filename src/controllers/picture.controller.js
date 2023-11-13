import AvatarPicture from "../models/AvatarPictures.js";
import FundoPictures from "../models/FundoPictures.js";
import PostPictures from "../models/PostPictures.js";
import { getAllPostsImage, createPostService } from "../services/picturePost.service.js";

const avatarUser = async (req, res) => {
    try {
        const {name, userName, email, password} = req.body;
        const file = req.file;
        // const fundo = req.file;

        const picture = new AvatarPicture({
            user: user,
            name: name,
            src: file.path
        });

        await picture.save();

        res.json({picture, msg: "Imagem salva com sucesso"});

    } catch (error) {
        res.status(500).json({message: "Erro ao salvar imagem"});
    }
}

const fundoUser = async (req, res) => {
    try {
        const {name, user} = req.body;
        const file = req.file;

        const picture = new FundoPictures({
            user: user,
            name: name,
            src: file.path
        });

        await picture.save();

        res.json({picture, msg: "Imagem salva com sucesso"});

    } catch (error) {
        res.status(500).json({message: "Erro ao salvar imagem"});
    }
}

const createPost = async (req, res) => {
    try {
        const {user, title, text} = req.body;
        const file = req.file;

        if( !user || !title || !text){
            return res.status(400).send({
                msg: "Submeta todos os campos da publicação"
            });
        }

        await createPostService({
            user,
            src: file.path,
            title,
            text
        });

        res.status(200).send({
            msg: "Publicação realizada com sucesso"
        });

    } catch (error) {
        res.status(500).json({message: "Erro ao realizar a publicação"});
        console.log(error);
    }
}

const getImage = async (req, res) => {
    const images = await AvatarPicture.find();
    res.send(images)
}

const getPost = async (req, res) => {
    const response = await getAllPostsImage();
    res.send(response);
}


export { avatarUser, fundoUser, createPost, getImage, getPost }