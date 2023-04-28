"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDaoImpl = void 0;
const query_1 = __importDefault(require("./query"));
const connections_1 = require("../connections");
class ProductDaoImpl {
    constructor() { }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    getProducts(offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rows } = yield connections_1.DB_CONN.query(query_1.default.getProducts(), [
                    offset,
                    limit,
                ]);
                return Promise.resolve(rows);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getProductsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rows } = yield connections_1.DB_CONN.query(query_1.default.getProductsCount());
                return Promise.resolve(rows[0].count);
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
}
exports.ProductDaoImpl = ProductDaoImpl;
const DB = ProductDaoImpl.Instance;
exports.default = DB;
//# sourceMappingURL=index.js.map