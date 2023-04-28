"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const helpers_1 = require("../helpers");
const loggerMiddleware = (req, res, next) => {
    const { statusCode } = res;
    const { method, path, body, ip } = req;
    helpers_1.logger.req("", { method, path, body, ip }, { statusCode });
    next();
};
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=loggerMiddleware.js.map