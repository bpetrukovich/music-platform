import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { CLIENT_URLS } from "./utils/constants";
import { router } from "./router";

const PORT = process.env.PORT;

const app = express();
app.use(cors({ origin: CLIENT_URLS }));
app.use(morgan("dev"));
app.use("/api", router);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.static(path.join(__dirname, "../public")));

async function main() {
  try {
    const name = process.env.DB_USER;
    const pass = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    // mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
    await mongoose.connect(`mongodb://${name}:${pass}@${host}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`mongoose connection error: ${error}`);
  }
}

main().catch((err) => console.log(err));
