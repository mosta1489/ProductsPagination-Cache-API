import { logger } from "../helpers";
import cache from "../cache";
import DB from "../database";

export const getTotalCount = async () => {
  let totalCount: number;
  await cache
    .getProductsCount()
    .then((count) => {
      totalCount = count;
    })
    .catch((err) => {
      logger.error("error getting products count from cache", err);
    });

  if (!totalCount) {
    await DB.getProductsCount()
      .then((count) => {
        totalCount = count;
        cache.setProductsCount(count);
      })
      .catch((err) => {
        logger.error("error getting products count from DB", err);
      });
  }
  return totalCount;
};
