import { Router } from "express";
import Docker from "../model/docker";

const dockerRoutes = Router();

dockerRoutes.get("/docker", function (req, res) {
  res.send(Docker.findAllContainer());
});

dockerRoutes.put("/docker/:id", function (req, res) {
  const { id } = req.params;
  res.send(Docker.stopContainer(id));
});

dockerRoutes.delete("/docker/:id", function (req, res) {
  const { id } = req.params;
  res.send(Docker.removeDockerContainer(id));
});

dockerRoutes.delete("/docker", function (req, res) {
  res.send(Docker.removeAllDockerContainer());
});

export default dockerRoutes;
