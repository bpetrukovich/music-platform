import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { router } from "./router";

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error("PORT not found");
}

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use("/api", router);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.static(path.join(__dirname, "../public")));

async function main() {
  try {
    const uri = process.env.DB_URI;
    if (!uri) {
      throw new Error("DB_URI not found");
    }
    // mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`mongoose connection error: ${error}`);
  }
}

main().catch((err) => console.log(err));
