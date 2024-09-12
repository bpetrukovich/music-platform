import express from "express";
import { testController } from "./testController";

export const testRouter = express.Router();

testRouter.get("/", testController.get);
// testRouter.post("/", testController.create);
