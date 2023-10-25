import mongoose from "mongoose";
import { createUser, findAllService, findByIdService, updateService } from "../services/user.service.js";

const validId = (req, res, next) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message: "ID inválido"});
    }
    next();
}

const validUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await findByIdService(id);

    if(!user){
        return res.status(400).send({message: 'Usuário não encontrado'});
    }

    req.id = id;
    req.user = user;
    
    next();
}

export {validId, validUser}