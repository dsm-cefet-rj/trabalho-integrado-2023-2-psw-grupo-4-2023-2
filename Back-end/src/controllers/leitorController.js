import Leitor from "../models/leitor.js";
import bcrypt from "bcrypt";

class LeitorController {
  //Consulta de dados
  static async listarLeitores(req, res) {
    try {
      const listaLeitores = await Leitor.find({});
      res.status(200).json(listaLeitores);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarLeitorPorId(req, res) {
    try {
      const id = req.params.id;
      const leitorEncontrado = await Leitor.findById(id);
      res.status(200).json(leitorEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

 

  // DELETE
  static async excluirLeitor(req, res) {
    try {
      const id = req.params.id;
      await Leitor.findByIdAndDelete(id);
      res.status(200).json({ message: "Leitor excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }

  // BUSCA
  static async listarLeitoresPorNome(req, res) {
    const nome = req.query.nome;
    try {
      const leitoresPorNome = await Leitor.find({ nome: nome });
      res.status(200).json(leitoresPorNome);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
}

export default LeitorController;
