import getProductCategories from "@/lib/queries";

// Components
import { SectionContainer }     from "@/tp-kit/components/section-container";
import { BreadCrumbs }          from "@/tp-kit/components/breadcrumbs";
import { ProductGrid }          from "@/components/product-grid";
import Link                     from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page d’accueil - Starbucks",
    description: "Commandez de délicieuses boissons préparées avec soin par nos baristas",
};

export default function Page() {
    const categories = getProductCategories();

    return (
        <main>
            <SectionContainer>
                <BreadCrumbs
                    className="my-0 font-montserrat"
                    items={[{ label: "Accueil", url: "/" }]}
                />
            </SectionContainer>

            {categories.map((category) => (
                <SectionContainer key={category.id} id={category.slug}>
                    <h2 className="text-lg font-sans font-bold mb-6">
                        <Link href={`/${category.slug}`} className="link">
                            {category.name} ({category.products.length})
                        </Link>
                    </h2>

                    <ProductGrid products={category.products} />
                </SectionContainer>
            ))}
        </main>
    );
}