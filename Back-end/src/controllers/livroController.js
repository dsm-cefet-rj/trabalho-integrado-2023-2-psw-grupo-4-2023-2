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
    }
}