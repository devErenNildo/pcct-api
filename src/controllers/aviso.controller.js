import { avisoServiceFindAll, avisoServiceCreate } from "../services/aviso.service.js";

const avisoFindAll = async (req, res) => {
    try{
        const avisos = await avisoServiceFindAll();

        if(avisos.length === 0) {
            return res.status(400).send({ message: 'Nenhum avido encontrado'});
        }

        res.send(avisos);

    } catch (e) {
        res.status(500).send(e.message);
    }
}


const avisoCreate = async (req, res) => {
    try{
        const { title, text, user, turma } = req.body;

        if(!title || !text || !turma) {
            return res.status(400).send({
                message: "Submeta todos os campos da publicação"
            });
        }

        await avisoServiceCreate({
            title,
            text,
            user,
            turma
        });

        res.status(200).send('ok');

    } catch (e) {
        res.status(500).send(e.message);
    }
}

export { avisoFindAll, avisoCreate };