import bcrypt from "bcrypt";
import Leitor from "../models/Leitor.js";

class LeitorController {
  //Consulta dos leitores e leitores por ID.
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

  //Trata a senha antes da criação do leitor no bd.
  static async cadastrarLeitor(req, res) {
    try {
      // const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);
      // req.body.senha = senhaCriptografada;
      // console.log(req.body);
      const novoLeitor = await Leitor.create(req.body);
      res.status(201).json({ message: "Leitor criado com sucesso", leitor: novoLeitor });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar leitor` });
    }
  }

  //Atualizar os leitores do Banco de Dados.
  static async atualizarLeitor(req, res) {
    try {
      const id = req.params.id;
      await Leitor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Leitor atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  }

  //Apagar leitores do Banco de Dados.
  static async excluirLeitor(req, res) {
    try {
      const id = req.params.id;
      await Leitor.findByIdAndDelete(id);
      res.status(200).json({ message: "Leitor excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }

  //Consultar leitores por nome.
  static async listarLeitoresPorNome(req, res) {
    const nome = req.query.nome;
    try {
      const leitoresPorNome = await Leitor.find({ nome: nome });
      res.status(200).json(leitoresPorNome);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }

  static async login(req, res) {
    const { email, senha } = req.body;

    try {
      const leitor = await Leitor.findOne({ email });
      console.log(leitor)
      if (!leitor) {
        res.status(404).json({ success: false, message: "Email ou senha incorretos. Tente novamente" })
      } else {

        bcrypt.compare(senha, leitor.senha, function (err, result) {
          if (result) {
            res.status(200).json({ success: true, data: leitor });
          } else {
            res.status(404).json({ success: false, message: "Email ou senha incorretos. Tente novamente" });
          }
        });

      }
    } catch (erro) {
      res.status(500).json({ success: false, message: `${erro.message} - Erro ao tentar fazer login` });
    }
  }

}

export default LeitorController;
