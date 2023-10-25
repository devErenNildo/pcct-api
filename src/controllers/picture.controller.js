import AvatarPicture from "../models/AvatarPictures.js";
import FundoPictures from "../models/FundoPictures.js";
import PostPictures from "../models/PostPictures.js";

const avatarUser = async (req, res) => {
    try {
        const {name, user} = req.body;
        const file = req.file;

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

const postUser = async (req, res) => {
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



export { avatarUser, fundoUser, postUser }