import express from "express";
import livrosRoutes from "./livrosRoutes.js";
import livros from "./livrosRoutes.js"
import favoritos from "./favoritosRoutes.js"
// import leitoresRoutes from "./leitoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("BD LeiaMais"));
  app.use(express.json());
  app.use("/", livrosRoutes);
  app.use("/", favoritos);
  app.use("/", livros);
  // app.use("/leitores", leitoresRoutes);

}

export default routes;
