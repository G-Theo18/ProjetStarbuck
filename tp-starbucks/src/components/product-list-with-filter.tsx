"use client";

import { useState, useMemo } from "react";
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

    const filteredCategories = useMemo(() => {
        const search = filters.search?.trim().toLowerCase();

        return categories
            .filter(
                (category) =>
                    filters.categoriesSlug.length === 0 ||
                    filters.categoriesSlug.includes(category.slug)
            )
            .map((category) => ({
                ...category,
                products: category.products.filter(
                    (product) =>
                        !search ||
                        product.name.toLowerCase().includes(search)
                ),
            }))
            .filter((category) => category.products.length > 0);
    }, [categories, filters]);

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