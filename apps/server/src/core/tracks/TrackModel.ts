import mongoose from "mongoose";
import { ITrack } from "./ITrack";

const trackSchema = new mongoose.Schema<ITrack>({
  name: String,
  author: String,
  audio: String,
  listens: Number,
  album: String,
});

export const TrackModel = mongoose.model<ITrack>("Track", trackSchema);
