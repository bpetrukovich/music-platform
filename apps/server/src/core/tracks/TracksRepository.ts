import { TrackDTO } from "@music-platform/shared";
import { TrackModel } from "./TrackModel";

class TracksRepository {
  async findAll() {
    return await TrackModel.find();
  }

  async findByName(name: string) {
    return await TrackModel.find({ name });
  }

  async create(track: TrackDTO) {
    return await TrackModel.create(track);
  }
}

export const tracksRepository = new TracksRepository();
