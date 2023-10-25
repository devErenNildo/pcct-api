import { Router } from "express";
import { avisoFindAll, avisoCreate } from "../controllers/aviso.controller.js";

const avisoRoute = Router();

avisoRoute.get('/', avisoFindAll);
avisoRoute.post('/create', avisoCreate);


export default avisoRoute;