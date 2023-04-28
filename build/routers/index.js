"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const handlers_1 = require("../handlers");
const productRouter = (0, express_1.Router)();
productRouter.get("/", (0, express_async_handler_1.default)(handlers_1.getProductsHandler));
// ... other routes if i want to scale the app
exports.default = productRouter;
//# sourceMappingURL=index.js.map