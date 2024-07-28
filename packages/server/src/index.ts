import mongoose from "mongoose";
import express from "express";
import { router } from "./routers";
import "dotenv/config";
import morgan from "morgan";

const PORT = process.env.PORT;

const app = express();
app.use(morgan("dev"));
app.use("/api", router);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? "error");
  } catch (error) {
    console.log(`mongoose connection error: ${error}`);
  }
}

main().catch((err) => console.log(err));
