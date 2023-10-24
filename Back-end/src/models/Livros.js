import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    image: {type: String},
    url: {type: String},
    name: { type: String, requiered:true }, 
    descricao: {type: String},
    sinopse: {type: String},
    pdf: {type: String},
    genero: {type: String}

}, {versionKey: false}); 

const livro = mongoose.model("livros", livroSchema); 

export default livro;