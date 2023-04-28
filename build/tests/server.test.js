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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe("Integration test", () => {
    const client = (0, supertest_1.default)(server_1.default);
    it("Server is running", () => __awaiter(void 0, void 0, void 0, function* () {
        client.get("/test").expect(200);
    }));
    // test get products endpoint and pass query params page, limit
    it("Get page of products", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.get("/products?page=1&limit=10");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("totalPages");
        expect(response.body).toHaveProperty("currentPage");
    }));
    // test get products endpoint and pass query params page, limit, category
    it("Get page of products using anouter limit", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.get("/products?page=2&limit=5&category=electronics");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("totalPages");
        expect(response.body).toHaveProperty("currentPage");
    }));
});
//# sourceMappingURL=server.test.js.map