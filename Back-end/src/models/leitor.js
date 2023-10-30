import mongoose from "mongoose";
//Está biblioteca é para criptografia. Estou pensando em usar para uma futura opção de segurança para as senhas do usuário.
import bcrypt from "bcrypt";

const leitorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  
}, { versionKey: false });

//Tratando a senha com tabela de hash.
leitorSchema.pre('save', async function (next) {
    if (!this.isModified('senha')) {
      return next();
    }
  

const Leitor = mongoose.model("Leitor", leitorSchema);

export default Leitor;
