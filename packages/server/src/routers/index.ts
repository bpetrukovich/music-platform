import { Router } from "express";
import { tracksRouter } from "./tracksRouter";

export const router = Router();

router.use("/tracks", tracksRouter);
