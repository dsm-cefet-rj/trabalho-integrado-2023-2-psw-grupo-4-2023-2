import leitura from "../models/Leitura.js";

class LeituraController{
    //READ
    static async listarLeituras(req,res){
        try {
            const listaLeituras = await leitura.find({});
             res.status(200).json(listaLeituras);
        } catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarLeiturasPorId (req,res){
        try {
            const id = req.params.id;
            const leituraEncontrado = await leitura.findById(id);
            res.status(200).json(leituraEncontrado);
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na requisição`});
           }
    };
    //CREATE
    static async cadastrarLeitura (req,res){
        try{
            const novoLeitura = await leitura.create(req.body); 
            res.status(201).json({message: "leitura criada com sucesso", leitura: novoLeitura}); 
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar leitura`});
        }
    };
    //UPDATE
    static async atualizarLeitura (req,res){
        try {
            const id = req.params.id;
            await leitura.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "leitura atualizada"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na atualização`});
           }
    };
    //DELETE
    static async excluirLeitura (req,res){
        try {
            const id = req.params.id;
            await leitura.findByIdAndDelete(id);
            res.status(200).json({message: "leitura excluída com sucesso"});
           }catch (erro) {
            res
               .status(500)
               .json({ message: `${erro.message} - falha na exclusão`});
           }
    };
    //BUSCA
    static async listarLeiturasPorUsuario(req, res) {
        const idUsuario = req.query.idUsuario;
        try{
            const leiturasPorUsuario = await leitura.find({idUsuario: idUsuario});
            res.status(200).json(leiturasPorUsuario);
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na busca`});
        }
    };

    static async buscarLeitura(req, res) { 
        const idUsuario = req.query.idUsuario;
        const idLivro = req.query.idLivro;
        try{
            const leituraEncontrada = await leitura.find({idUsuario: idUsuario, idLivro: idLivro});
            if(leituraEncontrada === 0){
                await LeituraController.cadastrarLeitura(req, res);
            }
            else{
                res.status(200).json(leituraEncontrada);
            }
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na busca`});
        }
    };
};

export default LeituraController;