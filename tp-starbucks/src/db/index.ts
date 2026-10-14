import { drizzle } from "drizzle-orm/pglite";
import { relations } from "./relations";

export const db = drizzle(process.env.DATABASE_URL!, { relations });