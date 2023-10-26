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

        const picture = new PostPictures({
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

const imageAvatar = async (req, res) => {
    const img = req.params.img
    const image = await AvatarPicture.findById(img);

    if(image){
        // res.send(image);
        const file = await fs.readFile(image.src);
        res.send(file);
    } else{
        res.send("não");
    }
}



export { avatarUser, fundoUser, postUser, imageAvatar }