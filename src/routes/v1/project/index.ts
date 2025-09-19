import express, { Router } from "express";
import { getProject, listProjects, listTP, errr } from "./controller.js";
const project: Router = express.Router();

project.get("/", listProjects);
project.get("/tp", listTP);
project.get("/errr", errr);
project.get("/:id", getProject);

export default project;
