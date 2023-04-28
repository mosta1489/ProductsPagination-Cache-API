export class MyQuery {
  private static _instance: MyQuery;
  private constructor() {}

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  getProducts() {
    return `SELECT * FROM products OFFSET $1 LIMIT $2`;
  }

  getProductsCount() {
    return `SELECT COUNT(*) FROM products`;
  }
}

const myQuery = MyQuery.Instance;
export default myQuery;
