"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyQuery = void 0;
class MyQuery {
    constructor() { }
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
exports.MyQuery = MyQuery;
const myQuery = MyQuery.Instance;
exports.default = myQuery;
//# sourceMappingURL=query.js.map