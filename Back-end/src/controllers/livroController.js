import Livro from "../models/Livro.js";

class LivroController {
    //READ
    static async listarLivros(req, res) {
        try {
            const { ids, excluido } = req.query

            const query = {};

            if (ids) {
                query._id = ids;
            }

            query.excluido = excluido ? true : false

            const listaLivros = await Livro.find(query);
            res.status(200).json(listaLivros);
        } catch (erro) {
            res
                .status(500)
                .json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await Livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res
                .status(500)
                .json({ message: `${erro.message} - falha na requisição` });
        }
    };
    //CREATE
    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await Livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    };
    //UPDATE
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const { excluido, urlImg, titulo, descricao, sinopse, genero } = req.body;
            const result = await Livro.findByIdAndUpdate(id, { excluido, url: urlImg, name: titulo, descricao, sinopse, genero });
            res.status(200).json({ success: true, data: result, message: "livro atualizado" });
        } catch (erro) {
            res
                .status(500)
                .json({ success: false, message: `${erro.message} - falha na atualização` });
        }
    };
    //DELETE
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await Livro.findByIdAndDelete(id);
            res.status(200).json({ message: "livro excluído com sucesso" });
        } catch (erro) {
            res
                .status(500)
                .json({ message: `${erro.message} - falha na exclusão` });
        }
    };
    //BUSCA
    static async listarLivrosPorName(req, res) {
        const name = req.query.name;
        try {
            const livrosPorName = await Livro.find({ name: name });
            res.status(200).json(livrosPorName);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    };

    static async quantidadeLivrosPorGenero(req, res) {
        try {
            const resultado = await Livro.aggregate([
                {
                    $group: {
                        _id: "$genero", // Campo pelo qual você deseja agrupar
                        totalLivros: { $sum: 1 } // Contagem de documentos em cada grupo
                    }
                },
                {
                    $match: {
                        _id: { $in: req.query.ids }
                    }
                },
            ]);
            res.status(200).json(resultado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    };
};

export default LivroController;