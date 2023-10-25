import express from 'express';
import conectDataBase from './src/database/db.js';
import dotenv from 'dotenv'
dotenv.config();

import userRouter from './src/routes/user.route.js';
import authRouter from './src/routes/auth.route.js';
import postRouter from './src/routes/post.route.js';
import avisoRoute from './src/routes/aviso.route.js';
import pictureRouter from './src/routes/picture.route.js';



const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/user", userRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);
// app.use('/warning', warningRoute);
app.use('/aviso', avisoRoute);
app.use('/pictures', pictureRouter);

app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`));
conectDataBase();

export default app;