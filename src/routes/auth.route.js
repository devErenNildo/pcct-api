import { Router } from "express";
import { login } from "../controllers/auth.conttroller.js";

const authRouter = Router();

authRouter.post('/', login);

export default authRouter;