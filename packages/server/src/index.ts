import mongoose from "mongoose";
import express from "express";
import { router } from "./routers";
import "dotenv/config";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { CLIENT_URLS } from "./utils/constants";

const PORT = process.env.PORT;

const app = express();
app.use(cors({ origin: CLIENT_URLS }));
app.use(morgan("dev"));
app.use("/api", router);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.static(path.join(__dirname, "../public")));

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? "error");
  } catch (error) {
    console.log(`mongoose connection error: ${error}`);
  }
}

main().catch((err) => console.log(err));
