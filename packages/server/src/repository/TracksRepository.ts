import { ITrack } from "src/interfaces/ITrack";
import { TrackModel } from "../models/TrackModel";

class TracksRepository {
  async findAll() {
    return await TrackModel.find();
  }

  async findByName(name: string) {
    return await TrackModel.find({ name });
  }

  async create(track: ITrack) {
    return await TrackModel.create(track);
  }
}

export const tracksRepository = new TracksRepository();
