import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(process.env.DIRECT_URL ?? "", { max: 1 });
const db = drizzle(migrationClient);

await migrate(db, { migrationsFolder: "drizzle" });
await migrationClient.end();
