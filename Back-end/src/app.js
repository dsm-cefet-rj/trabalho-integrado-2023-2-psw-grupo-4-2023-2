import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";

//Criando instância de express
const app = express(); 

//Criando conexão
const conexao = await conectaNaDataBase();

//Eventos 
conexao.on("error", (erro)=>{   //Se o evento for um erro
    console.error("erro de conexão:", erro)
});

conexao.once("open", ()=>{ //Se a conexão for aberta com sucesso
    console.log("Conexão com o banco feita com sucesso")
})

//async deve ser adicionada antes dos parâmetros e await antes da instrução da variável

export default app;