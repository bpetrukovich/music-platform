import { Router } from "express";
import { tracksRouter } from "./core/tracks/tracksRouter";
import { testRouter } from "./core/test/testRouter";

export const router = Router();

router.use("/tracks", tracksRouter);
router.use("/test", testRouter);
