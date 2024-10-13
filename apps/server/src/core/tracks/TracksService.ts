import { tracksRepository } from "./TracksRepository";
import { TrackDTO } from "@music-platform/shared";

class TracksService {
  async getAll() {
    return await tracksRepository.findAll();
  }

  async getByName(name: string) {
    return await tracksRepository.findByName(name);
  }

  async create(track: TrackDTO) {
    return await tracksRepository.create(track);
  }
}

export const tracksService = new TracksService();
