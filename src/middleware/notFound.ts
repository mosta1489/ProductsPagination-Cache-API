import { RequestHandler } from "express";

export const notFound: RequestHandler = (_, res) => {
  res.status(404).send({ status: ` 🤷‍♂️ 🤷‍♂️ page not found ` });
};
