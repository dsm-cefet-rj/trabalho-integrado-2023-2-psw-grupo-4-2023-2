import express from "express";
import livrosRoutes from "./livrosRoutes.js";
import leitoresRoutes from "./leitorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("BD LeiaMais"));
  app.use(express.json());
  app.use("/", livrosRoutes);
  app.use("/", leitoresRoutes);
};

export default routes;
