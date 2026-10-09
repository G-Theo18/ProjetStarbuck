import { getCategoryFromSlug } from "@/lib/queries";

import { SectionContainer } from "@/tp-kit/components/section-container";
import { BreadCrumbs } from "@/tp-kit/components/breadcrumbs";
import { ProductGrid } from "@/components/product-grid";

import type { Metadata } from "next";

type PageProps = {
    params: Promise<{ categorySlug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { categorySlug } = await params;
    const category = await getCategoryFromSlug(categorySlug);

    return {
        title: category.name,
        description: `Trouvez votre inspiration avec un vaste choix de boissons Starbucks parmi nos produits ${category.name}`,
    };
}

export default async function Page({ params }: PageProps) {
    const { categorySlug } = await params;
    const category = await getCategoryFromSlug(categorySlug);

    return (
        <main>
            <SectionContainer>
                <BreadCrumbs
                    className="my-0 font-montserrat"
                    items={[
                        { label: "Accueil", url: "/" },
                        { label: category.name, url: `/${category.slug}` },
                    ]}
                />
            </SectionContainer>

            <SectionContainer id={category.slug}>
                <h2 className="text-lg font-sans font-bold mb-6">
                    {category.name} ({category.products.length})
                </h2>

                <ProductGrid products={category.products} />
            </SectionContainer>
        </main>
    );
}