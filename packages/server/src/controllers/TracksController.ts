import { tracksService } from "../services/TracksService";
import { Response, Request } from "express";

class TracksController {
  async getAll(_: any, response: Response) {
    const data = await tracksService.getAll();
    response.send(data);
  }

  async getByName(request: Request, response: Response) {
    const data = await tracksService.getByName(request.params.name);
    response.send(data);
  }
}

export const tracksController = new TracksController();
