import { REDIS } from "../connections";
import { logger, accessEnv } from "../helpers";
import { productCacheDao } from "./productCacheDao";
import * as type from "../contracts/types";

export class ProductCache implements productCacheDao {
  private static instance: ProductCache;
  private constructor() {}
  static getInstance(): ProductCache {
    if (!ProductCache.instance) {
      ProductCache.instance = new ProductCache();
    }
    return ProductCache.instance;
  }

  async setPage(page: number, products: type.Product[]): Promise<void> {
    await REDIS.set(
      `page_${page}`,
      JSON.stringify(products),
      "EX",
      accessEnv("CACHE_TTL")
    )
      .then(() => {
        logger.info("Products cached successfully ✅ ✅ ✅ ");
        return Promise.resolve();
      })
      .catch((err) => {
        logger.error("Error caching products ❌ ❌ ❌ ", err);
        return Promise.reject(err);
      });
  }

  async getPage(page: number): Promise<type.Product[]> {
    return await REDIS.get(`page_${page}`)
      .then((products) => {
        logger.info("Products retrieved successfully ✅ ✅ ✅ ");
        return Promise.resolve(JSON.parse(products));
      })
      .catch((err) => {
        logger.error("Error retrieving products ❌ ❌ ❌ ", err);
        return Promise.reject(err);
      });
  }

  async setProductsCount(count: number): Promise<void> {
    await REDIS.set("product_count", count, "EX", accessEnv("CACHE_TTL"))
      .then(() => {
        logger.info("Product count cached successfully ✅ ✅ ✅ ");
        return Promise.resolve();
      })
      .catch((err) => {
        logger.error("Error caching product count ❌ ❌ ❌ ", err);
        return Promise.reject(err);
      });
  }

  async getProductsCount(): Promise<number> {
    return await REDIS.get("product_count")
      .then((count) => {
        logger.info("Product count retrieved successfully ✅ ✅ ✅ ");
        return Promise.resolve(count);
      })
      .catch((err) => {
        logger.error("Error retrieving product count ❌ ❌ ❌ ", err);
        return Promise.reject(err);
      });
  }
}

const cache = ProductCache.getInstance();

export default cache;
