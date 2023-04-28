import * as type from "../contracts/types";
export interface productDao {
  getProducts(offset: number, limit: number): Promise<type.Product[]>;
  getProductsCount(): Promise<number>;
}
