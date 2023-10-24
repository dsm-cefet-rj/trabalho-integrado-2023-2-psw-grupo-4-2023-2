import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    image: {type: String, requiered:true},
    url: {type: String, requiered:true},
    name: { type: String, requiered:true }, 
    descricao: {type: String, requiered:true},
    sinopse: {type: String, requiered:true},
    pdf: {type: String, requiered:true},
    genero: {type: String}

}, {versionKey: false}); 

const livro = mongoose.model("livros", livroSchema); 

export default livro;