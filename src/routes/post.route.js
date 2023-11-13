import { Router } from 'express';
import { created, findAll, addLikePost } from '../controllers/post.controller.js';
import { authMiddleware } from '../middlewares/auth.middlewares.js';
import upload from '../config/multer.js';

const postRouter = Router();

postRouter.post('/create', upload.single('file'), created);

postRouter.get('/', findAll);

postRouter.patch('/like/:id', addLikePost);

export default postRouter;
