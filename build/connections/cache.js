"use strict";
// import { createClient } from "redis";
// import { accessEnv, logger } from "../helpers";
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
exports.REDIS = exports.Redis = void 0;
// let REDIS;
// if (!accessEnv("REDIS_URL")) {
//   logger.error(
//     "Error connecting to Redis ❌ ❌ ❌ ",
//     "No Redis connection string"
//   );
// } else {
//   REDIS = createClient({
//     url: accessEnv("REDIS_URL"),
//   });
// }
// (async () => {
//   try {
//     await REDIS.connect();
//     logger.info("Redis connected successfully ✅ ✅ ✅ ");
//   } catch (error) {
//     logger.error("Error connecting to Redis ❌ ❌ ❌ ", error.message);
//   }
// })();
// export { REDIS };
// rewrite uper code to singleton pattern to avoid multiple connections
// Path: src/connections/redis.ts
const redis_1 = require("redis");
const helpers_1 = require("../helpers");
if (!(0, helpers_1.accessEnv)("REDIS_URL")) {
    helpers_1.logger.error("Error connecting to Redis ❌ ❌ ❌ ", "No Redis connection string");
}
const url = (0, helpers_1.accessEnv)("REDIS_URL");
class Redis {
    constructor() {
        this.REDIS = (0, redis_1.createClient)({ url: url });
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.REDIS.connect();
                helpers_1.logger.info("Redis connected successfully ✅ ✅ ✅ ");
            }
            catch (error) {
                helpers_1.logger.error("Error connecting to Redis ❌ ❌ ❌ ", error.message);
            }
        }))();
    }
    static getInstance() {
        if (!Redis.instance) {
            Redis.instance = new Redis();
        }
        return Redis.instance;
    }
    getClient() {
        return this.REDIS;
    }
}
exports.Redis = Redis;
exports.REDIS = Redis.getInstance().getClient();
//# sourceMappingURL=cache.js.map