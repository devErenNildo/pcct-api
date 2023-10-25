import { Router } from "express";
import { create, findAll, findById, upDate } from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middlaweres.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const userRouter = Router();

userRouter.post('/', create);
userRouter.get('/', findAll);
userRouter.get('/id', authMiddleware, findById);
userRouter.patch('/:id', upDate);



export default userRouter;