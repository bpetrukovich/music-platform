import express from "express";
import { tracksController } from "../controllers/TracksController";

export const tracksRouter = express.Router();

tracksRouter.get("/", tracksController.getAll);
tracksRouter.get("/:name", tracksController.getByName);
tracksRouter.post("/", tracksController.create);
