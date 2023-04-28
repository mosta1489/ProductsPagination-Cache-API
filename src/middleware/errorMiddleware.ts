import { ErrorRequestHandler } from "express";
import { logger } from "../helpers";

export const errHandler: ErrorRequestHandler = (err, _, res, __) => {
  logger.error("Uncaught exception:", err.message);
  return res
    .status(500)
    .send({
      status: " 🤦🏼‍♂️🤦🏼‍♂️  Oops! an unexpected error occurred, please try again",
    });
};
