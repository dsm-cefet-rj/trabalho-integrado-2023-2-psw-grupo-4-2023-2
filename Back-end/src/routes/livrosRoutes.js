import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorName);
routes.get("/livros/genero", LivroController.quantidadeLivrosPorGenero);
routes.get("/livros/:id", LivroController.listarLivrosPorId);
routes.post("/livros",LivroController.cadastrarLivro);
routes.patch("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;