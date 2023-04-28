import myQuery from "./query";
import { DB_CONN } from "../connections";
import * as type from "../contracts/types";
import { productDao } from "./productDao";

export class ProductDaoImpl implements productDao {
  private static _instance: ProductDaoImpl;
  private constructor() {}

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  async getProducts(offset: number, limit: number): Promise<type.Product[]> {
    try {
      const { rows } = await DB_CONN.query(myQuery.getProducts(), [
        offset,
        limit,
      ]);
      return Promise.resolve(rows);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProductsCount(): Promise<number> {
    try {
      const { rows } = await DB_CONN.query(myQuery.getProductsCount());
      return Promise.resolve(rows[0].count);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

const DB = ProductDaoImpl.Instance;
export default DB;
