"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONN = void 0;
const pg_1 = require("pg");
const helpers_1 = require("../helpers");
const connectionString = (0, helpers_1.accessEnv)("DATABASE_URL");
let DB_CONN;
exports.DB_CONN = DB_CONN;
if (!connectionString) {
    helpers_1.logger.error("Error connecting to Data Base  ❌ ❌ ❌", "No database connection string");
}
else {
    exports.DB_CONN = DB_CONN = new pg_1.Pool({ connectionString });
}
DB_CONN.connect()
    .then(() => {
    helpers_1.logger.info("Database connected successfully ✅ ✅ ✅ ");
})
    .catch((error) => {
    helpers_1.logger.error("Error connecting to Data Base  ❌ ❌ ❌", error.message);
});
//# sourceMappingURL=database.js.map