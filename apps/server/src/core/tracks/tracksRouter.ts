import express from "express";
import { tracksController } from "./TracksController";
import { uploadAudio } from "../../utils/middleware/upload";

export const tracksRouter = express.Router();

tracksRouter.get("/", tracksController.getAll);
tracksRouter.get("/:name", tracksController.getByName);
tracksRouter.post("/", uploadAudio.single("file"), tracksController.create);
