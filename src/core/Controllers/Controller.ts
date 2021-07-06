import { NextFunction, Request, Response } from 'express';

interface Controller {
  run(req:Request, res:Response, next:NextFunction):Promise<Response>;
}

export default Controller;
