import { defineConfig } from "drizzle-kit";



export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "sqlite", // dummy dialect for type safety, not used in runtime
});
