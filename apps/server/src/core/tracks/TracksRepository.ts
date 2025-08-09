import { TrackModel } from "./TrackModel";
import { ITrack } from "./ITrack";

class TracksRepository {
  async findAll() {
    return await TrackModel.find();
  }

  async findByName(name: string) {
    return await TrackModel.find({ name });
  }

  async create(track: ITrack) {
    const createdTrack = await TrackModel.create(track);
    console.log("Track created", createdTrack);
    return createdTrack;
  }
}

export const tracksRepository = new TracksRepository();
