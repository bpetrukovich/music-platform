import { ITrack } from "src/interfaces/ITrack";
import { tracksRepository } from "../repository/TracksRepository";

class TracksService {
  async getAll() {
    return await tracksRepository.findAll();
  }

  async getByName(name: string) {
    return await tracksRepository.findByName(name);
  }

  async create(track: ITrack) {
    return await tracksRepository.create(track);
  }
}

export const tracksService = new TracksService();
