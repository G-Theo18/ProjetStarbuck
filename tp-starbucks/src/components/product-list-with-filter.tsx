"use client";

import { useState } from "react";
import Link from "next/link";

import { ProductFilters } from "./product-filters";
import { ProductGrid } from "./product-grid";
import getProductCategories from "@/lib/queries";
import type { ProductFilterResult } from "@/app/type";

export function ProductListWithFilters() {
    const categories = getProductCategories();

    const [filters, setFilters] = useState<ProductFilterResult>({
        categoriesSlug: [],
    });

    const search = filters.search?.toLowerCase();

    const filteredCategories = categories
        .filter(
            (c) =>
                filters.categoriesSlug.length === 0 ||
                filters.categoriesSlug.includes(c.slug)
        )
        .map((c) => ({
            ...c,
            products: c.products.filter(
                (p) => !search || p.name.toLowerCase().includes(search)
            ),
        }))
        .filter((c) => c.products.length > 0);

    return (
        <div className="flex flex-col items-start gap-8 md:flex-row">
            <aside className="w-full shrink-0 md:w-1/5">
                <ProductFilters
                    categories={categories}
                    onChange={setFilters}
                />
            </aside>

            <div className="flex min-w-0 flex-1 flex-col gap-10">
                {filteredCategories.map((category) => (
                    <section key={category.id} id={category.slug}>
                        <h2 className="mb-6 font-sans text-lg font-bold">
                            <Link
                                href={`/${category.slug}`}
                                className="link"
                            >
                                {category.name} ({category.products.length})
                            </Link>
                        </h2>

                        <ProductGrid
                            products={category.products}
                            className="grid grid-cols-2 gap-8 lg:grid-cols-3"
                        />
                    </section>
                ))}
            </div>
        </div>
    );
}