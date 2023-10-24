import express from "express";
import livros from "./livrosRoutes.js"

const routes = (app) =>{
    app.route("/").get((req,res)=>res.status(200).send("BD LeiaMais"));
    //Transforma todas as requisições de String para Json e traz todas as rotas para Routes
    app.use(express.json(),livros);
};

export default routes;