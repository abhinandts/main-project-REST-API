import { Request, Response } from "express";
// import EntityNotFoundError from "../../../errors/EntityNotFoundError.js";

export const listTP = (req: Request, res: Response) => {
  res.status(200).json([]);
};
export const errr = (req: Request, res: Response) => {
  res.status(200).json({ id: "sample" });
};

export const listProjects = (req: Request, res: Response) => {
  res.status(200).json("All projects");
};

export const getProject = (req: Request, res: Response) => {
  res.status(200).json({ id: 1, name: "Project ONE" });
};
