import express, { Response } from "express";

export const globalRouter = express.Router();
globalRouter.get("/", (_, res: Response) => {
  res.send("Hello World!");
});
