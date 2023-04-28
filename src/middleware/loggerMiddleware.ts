import { RequestHandler } from "express";
import { logger } from "../helpers";

export const loggerMiddleware: RequestHandler = (req, res, next) => {
  const { statusCode } = res;
  const { method, path, body, ip } = req;
  logger.req("", { method, path, body, ip }, { statusCode });
  next();
};
