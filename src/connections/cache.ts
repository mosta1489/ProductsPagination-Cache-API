// import { createClient } from "redis";
// import { accessEnv, logger } from "../helpers";

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
import { createClient } from "redis";
import { accessEnv, logger } from "../helpers";

if (!accessEnv("REDIS_URL")) {
  logger.error(
    "Error connecting to Redis ❌ ❌ ❌ ",
    "No Redis connection string"
  );
}
const url = accessEnv("REDIS_URL");

export class Redis {
  private static instance: Redis;
  private REDIS;

  private constructor() {
    this.REDIS = createClient({ url: url });

    (async () => {
      try {
        await this.REDIS.connect();
        logger.info("Redis connected successfully ✅ ✅ ✅ ");
      } catch (error) {
        logger.error("Error connecting to Redis ❌ ❌ ❌ ", error.message);
      }
    })();
  }

  static getInstance(): Redis {
    if (!Redis.instance) {
      Redis.instance = new Redis();
    }
    return Redis.instance;
  }

  getClient(): any {
    return this.REDIS;
  }
}

export const REDIS = Redis.getInstance().getClient();
