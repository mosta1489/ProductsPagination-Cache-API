import * as type from "../contracts/types";
export interface productCacheDao {
  setPage(page: number, products: type.Product[]): Promise<void>;
  getPage(page: number): Promise<type.Product[]>;
  setProductsCount(count: number): Promise<void>;
  getProductsCount(): Promise<number>;
}
