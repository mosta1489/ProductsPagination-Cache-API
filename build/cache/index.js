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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCache = void 0;
const connections_1 = require("../connections");
const helpers_1 = require("../helpers");
class ProductCache {
    constructor() { }
    static getInstance() {
        if (!ProductCache.instance) {
            ProductCache.instance = new ProductCache();
        }
        return ProductCache.instance;
    }
    setPage(page, products) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connections_1.REDIS.set(`page_${page}`, JSON.stringify(products), "EX", (0, helpers_1.accessEnv)("CACHE_TTL"))
                .then(() => {
                helpers_1.logger.info("Products cached successfully ✅ ✅ ✅ ");
                return Promise.resolve();
            })
                .catch((err) => {
                helpers_1.logger.error("Error caching products ❌ ❌ ❌ ", err);
                return Promise.reject(err);
            });
        });
    }
    getPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connections_1.REDIS.get(`page_${page}`)
                .then((products) => {
                helpers_1.logger.info("Products retrieved successfully ✅ ✅ ✅ ");
                return Promise.resolve(JSON.parse(products));
            })
                .catch((err) => {
                helpers_1.logger.error("Error retrieving products ❌ ❌ ❌ ", err);
                return Promise.reject(err);
            });
        });
    }
    setProductsCount(count) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connections_1.REDIS.set("product_count", count, "EX", (0, helpers_1.accessEnv)("CACHE_TTL"))
                .then(() => {
                helpers_1.logger.info("Product count cached successfully ✅ ✅ ✅ ");
                return Promise.resolve();
            })
                .catch((err) => {
                helpers_1.logger.error("Error caching product count ❌ ❌ ❌ ", err);
                return Promise.reject(err);
            });
        });
    }
    getProductsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connections_1.REDIS.get("product_count")
                .then((count) => {
                helpers_1.logger.info("Product count retrieved successfully ✅ ✅ ✅ ");
                return Promise.resolve(count);
            })
                .catch((err) => {
                helpers_1.logger.error("Error retrieving product count ❌ ❌ ❌ ", err);
                return Promise.reject(err);
            });
        });
    }
}
exports.ProductCache = ProductCache;
const cache = ProductCache.getInstance();
exports.default = cache;
//# sourceMappingURL=index.js.map