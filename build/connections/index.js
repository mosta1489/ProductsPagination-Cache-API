"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS = exports.DB_CONN = void 0;
var database_1 = require("./database");
Object.defineProperty(exports, "DB_CONN", { enumerable: true, get: function () { return database_1.DB_CONN; } });
var cache_1 = require("./cache");
Object.defineProperty(exports, "REDIS", { enumerable: true, get: function () { return cache_1.REDIS; } });
//# sourceMappingURL=index.js.map