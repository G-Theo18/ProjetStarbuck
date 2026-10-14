import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
    productTable: {
        category: r.one.productCategoryTable({
            from: r.productTable.categoryId,
            to: r.productCategoryTable.id,
        }),
    },
    productCategoryTable: {
        products: r.many.productTable(),
    },
}));