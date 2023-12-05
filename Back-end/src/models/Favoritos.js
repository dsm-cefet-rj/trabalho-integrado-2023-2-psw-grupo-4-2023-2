import mongoose from "mongoose";

const favoritosSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
}, {versionKey: false}); 

const favoritos = mongoose.model("favoritos", favoritosSchema); 

export default favoritos;