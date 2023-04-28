import * as type from "../contracts/types";
import * as api from "../contracts/api";
import { logger } from "../helpers";
import cache from "../cache";
import DB from "../database";
import { getTotalCount } from "./getTotalCount";

// ----------------- get products handler ------------------------------
export const getProductsHandler: type.myHandlerWithQuery<
  api.GetProductsReq,
  api.GetProductsRes,
  api.GetProductsQuery
> = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const totalCount = await getTotalCount();

  const totalPages = Math.ceil(totalCount / limit);

  let products: type.Product[];

  // get page of products from cache
  await cache
    .getPage(page)
    .then((cachedProducts) => {
      products = cachedProducts;
    })
    .catch((err) => {
      logger.error("error getting products from cache", err);
    });

  // if page of products not in cache or page content !== limit products
  // get page from DB and cache
  if (!products || products.length !== limit) {
    await DB.getProducts(offset, limit)
      .then((productsDB) => {
        products = productsDB;
        cache.setPage(page, products);
      })
      .catch((err) => {
        logger.error("error getting products from DB", err);
      });
  }

  const response: api.GetProductsRes = {
    data: products,
    totalPages,
    currentPage: page,
  };

  res.status(200).send(response);
};
