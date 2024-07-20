import express from "express";
import { globalRouter } from "./routers/global.router";
import { tracksRouter } from "./routers/tracks.router";

const app = express();
app.use("/api", globalRouter);
app.use("/api/tracks", tracksRouter);
app.listen(3000, () => {
  console.log("Server start");
});
