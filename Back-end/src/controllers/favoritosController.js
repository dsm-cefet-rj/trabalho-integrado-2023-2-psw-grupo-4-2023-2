import livro from "../models/Livro.js";

class FavoritosController{
    //UPDATE
    static async favoritarLivro (req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro favoritado com sucesso"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na atualização`});
           }
    };
    //DELETE
    static async desfavoritarLivro (req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro desvaforitado com sucesso"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na exclusão`});
           }
    };
};

export default FavoritosController;