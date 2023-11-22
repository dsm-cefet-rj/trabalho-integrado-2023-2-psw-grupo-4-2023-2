import express from "express";
import FavoritosController from "../controllers/favoritosController.js";

const routes = express.Router();

//Respeitar ordem de complexidade das rotas
routes.put("/livros/:id", FavoritosController.favoritarLivro);
routes.delete("/livros/:id", FavoritosController.desfavoritarLivro);

export default routes;