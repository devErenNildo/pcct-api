import { Router } from 'express';
import { created, findAll, addLikePost, addCommentPost, deletePost, byUser } from '../controllers/post.controller.js';
import { authMiddleware } from '../middlewares/auth.middlewares.js';
import upload from '../config/multer.js';

const postRouter = Router();

postRouter.post('/create', upload.single('file'), created);

postRouter.get('/', findAll);

postRouter.get('/byUser/:id', byUser);

postRouter.delete('/:id', deletePost);

postRouter.patch('/like/:id', addLikePost);
postRouter.patch('/comment/:id', addCommentPost)

export default postRouter;
