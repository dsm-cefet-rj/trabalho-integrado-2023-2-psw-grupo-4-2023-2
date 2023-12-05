import express from "express";
import LeituraController from "../controllers/leituraController.js";

const routes = express.Router();

//Respeitar ordem de complexidade das rotas
routes.get("/leituras", LeituraController.listarLeituras);
routes.get("/leituras/busca", LeituraController.listarLeiturasPorUsuario);
routes.get("/leituras/:id", LeituraController.listarLeiturasPorId);
routes.get("/leitura", LeituraController.buscarLeitura);
routes.post("/leitura",LeituraController.cadastrarLeitura);
routes.put("/leitura/:id", LeituraController.atualizarLeitura);
routes.delete("/leitura/:id", LeituraController.excluirLeitura);

export default routes;