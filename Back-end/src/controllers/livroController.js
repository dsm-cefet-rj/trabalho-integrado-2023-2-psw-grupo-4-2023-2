import livro from "../models/Livro.js";

class LivroController {
    //READ
    static async listarLivros(req, res) {
        try {
            const { ids } = req.query

            const query = ids ? { _id: ids } : {};

            const listaLivros = await livro.find(query);
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
            const livroEncontrado = await livro.findById(id);
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
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    };
    //UPDATE
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
            res
                .status(500)
                .json({ message: `${erro.message} - falha na atualização` });
        }
    };
    //DELETE
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
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
            const livrosPorName = await livro.find({ name: name });
            res.status(200).json(livrosPorName);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    };
};

export default LivroController;