import { Response, Request } from "express";

class TestController {
  get(_: Request, response: Response) {
    const success = {
      data: "api is working",
    };
    response.json(success);
  }
}

export const testController = new TestController();
