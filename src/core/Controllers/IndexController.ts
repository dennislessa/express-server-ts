import { NextFunction, Request, Response } from 'express';

export default class IndexController {
  async run(req:Request, res:Response, next:NextFunction):Promise<Response> {
    return res.json({
      message: 'hello world'
    });
  }
}
