"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errHandler = void 0;
const helpers_1 = require("../helpers");
const errHandler = (err, _, res, __) => {
    helpers_1.logger.error("Uncaught exception:", err.message);
    return res
        .status(500)
        .send({
        status: " 🤦🏼‍♂️🤦🏼‍♂️  Oops! an unexpected error occurred, please try again",
    });
};
exports.errHandler = errHandler;
//# sourceMappingURL=errorMiddleware.js.map