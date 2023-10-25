import bcrypt from "bcrypt"
import { loginService, generateToken } from "../services/auth.service.js";

const login = async (req, res) => {

    const { email, password } = req.body;

    try{
        const user = await loginService(email);

        if(!user){
            return res.status(404).send({message: "Usuário não cadastrado"})
        }
    
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if(!passwordIsValid || !user){
            return res.status(400).send({message: "Senha inválida"})
        }

        const token = generateToken(user.id)
    
        res.send({token});
    }catch(err){
        console.error(err);
        res.status(500).send(err.message);
    }
}

export { login }