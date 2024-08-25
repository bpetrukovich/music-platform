import { Router } from "express";
import { tracksRouter } from "./core/tracks/tracksRouter";

export const router = Router();

router.use("/tracks", tracksRouter);
