import { integer, text, real, pgTable } from "drizzle-orm/pg-core";

export const productCategoryTable = pgTable("ProductCategory", {
    id: integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
    slug: text().unique().notNull(),
    name: text().notNull()
});

export const productTable = pgTable("Product", {
    id: integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
    slug: text().unique().notNull(),
    path: text().unique().notNull(),
    name: text().notNull(),
    desc: text(),
    img: text().notNull(),
    price: real().notNull(),
    categoryId: integer().notNull().references(() => productCategoryTable.id),
});