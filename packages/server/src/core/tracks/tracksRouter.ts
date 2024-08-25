import express from "express";
import { tracksController } from "./TracksController";

export const tracksRouter = express.Router();

tracksRouter.get("/", tracksController.getAll);
tracksRouter.get("/:name", tracksController.getByName);
tracksRouter.post("/", tracksController.create);
