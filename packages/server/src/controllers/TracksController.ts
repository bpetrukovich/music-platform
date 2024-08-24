import { tracksService } from "../services/TracksService";
import { Response, Request } from "express";

class TracksController {
  async getAll(_: Request, response: Response) {
    const data = await tracksService.getAll();
    response.send(data);
  }

  async getByName(request: Request, response: Response) {
    const data = await tracksService.getByName(request.params.name);
    response.send(data);
  }

  async create(request: Request, response: Response) {
    await tracksService.create(request.body);
    response.send(request.body);
  }
}

export const tracksController = new TracksController();
