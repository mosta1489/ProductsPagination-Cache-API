import { Pool } from "pg";
import { accessEnv, logger } from "../helpers";

const connectionString = accessEnv("DATABASE_URL");
let DB_CONN: Pool;

if (!connectionString) {
  logger.error(
    "Error connecting to Data Base  ❌ ❌ ❌",
    "No database connection string"
  );
} else {
  DB_CONN = new Pool({ connectionString });
}

DB_CONN.connect()
  .then(() => {
    logger.info("Database connected successfully ✅ ✅ ✅ ");
  })
  .catch((error) => {
    logger.error("Error connecting to Data Base  ❌ ❌ ❌", error.message);
  });

export { DB_CONN };
