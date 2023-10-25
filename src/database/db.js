import mongoose from "mongoose";

const conectDataBase = () => {
    console.log("Aguarde conectando ao banco de dados...");

    mongoose.connect(process.env.MongoDb_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas Connected!"))
    .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
}

export default conectDataBase