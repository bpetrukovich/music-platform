import express, { Response } from "express";
import { tracksService } from "../services/tracks.service";

export const tracksRouter = express.Router();

tracksRouter.get("/", (_, res: Response) => {
  const data = tracksService.getAllTracks();
  res.send(data);
});
