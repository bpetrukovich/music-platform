import { Response, Request } from "express";
import { tracksService } from "./TracksService";

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
    console.log("body", request.body);
    await tracksService.create(request.body);
    response.send(request.body);
  }
}

export const tracksController = new TracksController();
