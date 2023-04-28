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
exports.getProductsHandler = void 0;
const helpers_1 = require("../helpers");
const cache_1 = __importDefault(require("../cache"));
const database_1 = __importDefault(require("../database"));
const getTotalCount_1 = require("./getTotalCount");
// ----------------- get products handler ------------------------------
const getProductsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const totalCount = yield (0, getTotalCount_1.getTotalCount)();
    const totalPages = Math.ceil(totalCount / limit);
    let products;
    // get page of products from cache
    yield cache_1.default
        .getPage(page)
        .then((cachedProducts) => {
        products = cachedProducts;
    })
        .catch((err) => {
        helpers_1.logger.error("error getting products from cache", err);
    });
    // if page of products not in cache or page content !== limit products
    // get page from DB and cache
    if (!products || products.length !== limit) {
        yield database_1.default.getProducts(offset, limit)
            .then((productsDB) => {
            products = productsDB;
            cache_1.default.setPage(page, products);
        })
            .catch((err) => {
            helpers_1.logger.error("error getting products from DB", err);
        });
    }
    const response = {
        data: products,
        totalPages,
        currentPage: page,
    };
    res.status(200).send(response);
});
exports.getProductsHandler = getProductsHandler;
//# sourceMappingURL=index.js.map