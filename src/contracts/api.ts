import * as type from "./types";

// ----------------- Get User Data ------------------------------
export interface GetProductsQuery {
  page: string;
  limit: string;
}

export interface GetProductsReq {}
export interface GetProductsRes {
  data: type.Product[];
  totalPages: number;
  currentPage: number;
}
