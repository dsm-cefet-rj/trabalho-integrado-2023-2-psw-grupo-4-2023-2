import mongoose from "mongoose";
//Está biblioteca é para criptografia. Estou pensando em usar para uma futura opção de segurança para as senhas do usuário.
import bcrypt from "bcrypt";

const leitorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  celular: { type: String },
  endereco: { type: String },
  favoritos: [{ type: mongoose.Schema.Types.ObjectId }],
  leituras: [{
    _id: false,
    livroId: { type: mongoose.Schema.Types.ObjectId, required: true },
    pag: { type: Number, required: true }
  }]

}, { versionKey: false });

//Tratando a senha com tabela de hash.
leitorSchema.pre('save', async function (next) {
  if (!this.isModified('senha')) {
    return next();
  }
  //Tratamento de erro.
  try {
    const hashedPassword = await bcrypt.hash(this.senha, 10);
    this.senha = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const Leitor = mongoose.model("leitores", leitorSchema);

export default Leitor;
