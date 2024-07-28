import mongoose from "mongoose";
import { ITrack } from "src/interfaces/ITrack";

const trackSchema = new mongoose.Schema<ITrack>({
  name: String,
  author: String,
  genre: String,
  audio: String,
  picture: String,
  listens: Number,
});

export const TrackModel = mongoose.model<ITrack>("Track", trackSchema);
