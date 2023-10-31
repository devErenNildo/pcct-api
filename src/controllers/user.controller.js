import { createUser, findAllService, findByIdService, updateService } from "../services/user.service.js";

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;
    try {
        if(!name || !username || !email || !password ){
            return res.status(400).send({ message: "Campos incompletos"});
        }
    
        const user = await createUser(req.body);
    
        if(!user){
            return res.status(400).send({ message: 'Erro ao criar o usuário'});
        }
    
        res.status(200).send({
            message: "Usuário criado com sucesso",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background
            }
        });        
    } catch (error) {
        res.status(500).send(error.message)
    }

}

const findAll = async (req, res) => {
    const users = await findAllService();

    if(users.length === 0){
        return res.status(400).send({ msg: 'Não há usuários cadastrados'});
    }

    res.send(users);
}

const findById = async (req, res) => {
    const id = req.userId;

    console.log(id);
    const user = await findByIdService(id);

    res.send(user);
}

const upDate = async (req, res) => {

    const { name, username, email, password, avatar, background } = req.body;

    if(!name && !username && !email && !password && !avatar && !background){
        res.status(400).send({ message: "Envie pelo menos um campo para alterar"});
    }

    const id = req.params.id;

    const user = await findByIdService(id);

    if(!user){
        res.status(400).send({ message: 'Usuário não encontrado'});
    }

    await updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background 
    );

    res.send({ message: 'Usuário atualizado com sucesso'});
}

export {create, findAll, findById, upDate };