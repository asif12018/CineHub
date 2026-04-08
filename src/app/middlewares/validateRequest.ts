import { NextFunction, Request, Response } from "express";
import z from "zod";

//zod validation middleware

export const validateRequest = (ZodSchema: z.ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body.data);
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }

    const parseResult = ZodSchema.safeParse(req.body);
    if (!parseResult.success) {
      return next(parseResult.error);
    }
    //sanitizing the data

    req.body = parseResult.data;
    next();
  };
};
