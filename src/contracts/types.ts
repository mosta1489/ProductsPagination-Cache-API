import { RequestHandler } from "express";

export interface Product {
  id: string;
  name: string;
  price: number;
}

type withError<T> = T & { error: string };
export type myHandler<ReqBody, ResBody> = RequestHandler<
  string,
  Partial<withError<ResBody>>,
  Partial<ReqBody>
>;

export type myHandlerWithParam<Param, ReqBody, ResBody> = RequestHandler<
  Partial<Param>,
  Partial<withError<ResBody>>,
  Partial<ReqBody>
>;

export type myHandlerWithQuery<ReqBody, ResBody, query> = RequestHandler<
  never,
  Partial<withError<ResBody>>,
  Partial<ReqBody>,
  Partial<query>
>;
