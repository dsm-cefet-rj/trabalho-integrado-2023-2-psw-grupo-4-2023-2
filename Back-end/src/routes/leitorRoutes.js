import express from "express";
import LeitorController from "../controllers/leitorController.js";

const routes = express.Router();
routes.get("/leitores", LeitorController.listarLeitores);
routes.get("/leitores/busca", LeitorController.listarLeitoresPorNome);
routes.get("/leitores/:id", LeitorController.listarLeitorPorId);
routes.post("/leitores", LeitorController.cadastrarLeitor);
routes.post("/leitores/login", LeitorController.login);
routes.put("/leitores/:id", LeitorController.atualizarLeitor);
routes.delete("/leitores/:id", LeitorController.excluirLeitor);

export default routes;
