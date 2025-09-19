import express, { Router } from "express";
import tasks from "./tasks/index.js";
import project from "./project/index.js";

const v1: Router = express.Router();

v1.use("/task", tasks);
v1.use("/project", project);

export default v1;