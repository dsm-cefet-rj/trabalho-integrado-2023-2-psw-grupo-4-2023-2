import mongoose from "mongoose";

const leituraSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    idUsuario: {type: mongoose.Schema.Types.ObjectId, requiered:true},
    idLivro: {type: mongoose.Schema.Types.ObjectId, requiered:true},
    dataComeco: { type: Date, requiered:true }, 
    pgAtual: {type: String, requiered:true}

}, {versionKey: false}); 

const leitura = mongoose.model("leitura", leituraSchema); 

export default leitura;