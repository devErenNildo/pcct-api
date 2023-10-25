import { Router } from 'express';
import { created, findAll } from '../controllers/post.controller.js';
import { authMiddleware } from '../middlewares/auth.middlewares.js';

const postRouter = Router();

postRouter.post('/create', authMiddleware, created);

postRouter.get('/', findAll);

export default postRouter;
