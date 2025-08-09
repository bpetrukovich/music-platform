import { ITrack } from "./ITrack";
import { tracksRepository } from "./TracksRepository";
import { TrackDTO } from "@music-platform/shared";

class TracksService {
  async getAll() {
    return await tracksRepository.findAll();
  }

  async getByName(name: string) {
    return await tracksRepository.findByName(name);
  }

  async create({ file, name, author, album }: TrackDTO) {
    console.log(file);
    const track: ITrack = { name, author, album, listens: 0, audio: "" };
    return await tracksRepository.create(track);
  }
}

export const tracksService = new TracksService();
