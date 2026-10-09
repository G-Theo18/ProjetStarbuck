"use client";

import { useState } from "react";
import Link from "next/link";

// Components
import { SectionContainer } from "@/tp-kit/components/section-container";
import { BreadCrumbs } from "@/tp-kit/components/breadcrumbs";
import { ProductGrid } from "@/components/product-grid";
import { ProductFilters } from "@/components/product-filters";
import { ProductListWithFilters } from "@/components/product-list-with-filter";

export default function Page() {
    return (
        <main>
            <SectionContainer>
                <BreadCrumbs
                    className="my-0 font-montserrat"
                    items={[{ label: "Accueil", url: "/" }]}
                />
            </SectionContainer>

            <SectionContainer>
                <ProductListWithFilters />
            </SectionContainer>
        </main>
    );
}