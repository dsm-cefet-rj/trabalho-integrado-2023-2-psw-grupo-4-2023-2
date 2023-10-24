import mongoose, {mongo} from "mongoose";

async function conectaNaDataBase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    // não é necessário adicionar await pois return já é implicitamente assíncrono.
    return mongoose.connection;
};

export default conectaNaDataBase;