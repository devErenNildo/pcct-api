import { Router } from "express";
import { avatarUser, fundoUser, postUser, getImage } from "../controllers/picture.controller.js";
import upload from "../config/multer.js";

const pictureRouter = Router();

pictureRouter.post('/avatar', upload.single("file") , avatarUser);
pictureRouter.post('/fundo', upload.single("file"), fundoUser);
pictureRouter.post('/post', upload.single("file"), postUser);

pictureRouter.get('/avatar', getImage);

export default pictureRouter;