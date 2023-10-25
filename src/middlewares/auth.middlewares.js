import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { findByIdService } from "../services/user.service.js";
dotenv.config();

const authMiddleware = (req, res, next) => {

    try {
        const { authorization } = req.headers;

        if(!authorization){
            return res.send(401);
        }
    
        const parts = authorization.split(" ");
    
        const [schema, token] = parts 
    
        if(schema !== "Bearer"){
            return res.send(401);
        }
    
        jwt.verify(token, process.env.Secret_JWT, async (error, decod)=> {
            if(error){
                return res.status(401).send({message: "Token invalido"});
            }

            const user = await findByIdService(decod.id);
            if(!user || !user.id){
                return res.status(401).send({message: "Token invalido"});
            }

            req.userId = user.id;

            return next();   
        });

    } catch (error) {
        res.status(500).send(error.message);

    }
}

export {authMiddleware};
