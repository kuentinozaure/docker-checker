import { Router } from "express";
import Docker from "../model/docker";
import { isWebBrowser } from "../util/tool";
import {  DOCKER_LIST_TABLE_ELEMENT } from '../constants/'
import { IMAGE_LIST_TABLE_ELEMENT } from '../constants/index';
const dockerRoutes = Router();

dockerRoutes.get("/container", function (req, res) {
  if (isWebBrowser(req.headers["user-agent"])) {
    res.render("container", {
      columns: DOCKER_LIST_TABLE_ELEMENT,
      dockers: Docker.findAllContainer(),
    });
  } else {
    res.send(Docker.findAllContainer());
  }
});

dockerRoutes.get("/image", function (req, res) {
  if (isWebBrowser(req.headers["user-agent"])) {
    res.render("image", {
      columns: IMAGE_LIST_TABLE_ELEMENT,
      images: Docker.findAllImage(),
    });
  } else {
    res.send(Docker.findAllImage());
  }
});

dockerRoutes.put("/docker", function (req, res) {
  const { id } = req.params;
  res.send(Docker.stopAllContainer(id));
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
