import livro from "../models/Livro.js";

class LivroController{
    //READ
    static async listarLivros(req,res){
        try {
            const listaLivros = await livro.find({});
             res.status(200).json(listaLivros);
        } catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarLivrosPorId (req,res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na requisição`});
           }
    };
    //CREATE
    static async cadastrarLivro (req,res){
        try{
            const novoLivro = await livro.create(req.body); 
            res.status(201).json({message: "criado com sucesso", livro: novoLivro}); 
        } catch (erro) {
            res.status(500).json({message: `${erro.massage} - falha ao cadastrar livro`});
        }
    };
    //UPDATE
    static async atualizarLivro (req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na atualização`});
           }
    };
    //DELETE
    static async excluirLivro (req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro excluído com sucesso"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na exclusão`});
           }
    };
    //BUSCA
    static async listarLivrosPorEditora(req, res) {
        const nome = req.query.nome;
        try{
            const livrosPorNome = await livro.find({nome: nome});
            res.status(200).json(livrosPorNome);
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na busca`});
        }
    };
};

export default LivroController;