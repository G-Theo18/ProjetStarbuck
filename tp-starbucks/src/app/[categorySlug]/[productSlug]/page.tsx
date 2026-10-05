import Image from "next/image";

import { getCategoryFromSlug, getProductFromSlug } from "@/lib/queries";

// Components
import { SectionContainer } from "@/tp-kit/components/section-container";
import { BreadCrumbs } from "@/tp-kit/components/breadcrumbs";
import { ProductRating } from "@/tp-kit/components/products/product-rating";
import { Button } from "@/tp-kit/components/button";
import { ProductGrid } from "@/components/product-grid";
import { ProductAttribute, ProductAttributesTable } from "@/components/ProductAttributesTable";

type PageProps = {
    params: Promise<{ categorySlug: string; productSlug: string }>;
};

const ATTRIBUTES: ProductAttribute[] = [
    { label: "Intensité", rating: 3 },
    { label: "Volupté", rating: 2 },
    { label: "Amertume", rating: 1 },
    { label: "Onctuosité", rating: 4 },
    { label: "Instagramabilité", rating: 5 },
];

export default async function Page({ params }: PageProps) {
    const { categorySlug, productSlug } = await params;
    const category = await getCategoryFromSlug(categorySlug);
    const product = await getProductFromSlug(categorySlug, productSlug);

    const otherProducts = category.products
        .filter((p) => p.id !== product.id)
        .slice(0, 4);

    return (
        <main>
            <SectionContainer>
                <BreadCrumbs
                    className="my-0 font-montserrat"
                    items={[
                        { label: "Accueil", url: "/" },
                        { label: category.name, url: `/${category.slug}` },
                        { label: product.name, url: `/${category.slug}/${product.slug}` },
                    ]}
                />
            </SectionContainer>

            <SectionContainer>
                <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
                    <div className="md:w-1/3 shrink-0 overflow-hidden rounded-lg">
                        <Image
                            src={product.img}
                            alt={product.name}
                            width={400}
                            height={400}
                            priority
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="flex flex-1 flex-col gap-6">
                        <h1 className="text-4xl font-sans font-bold">
                            {product.name}
                        </h1>

                        <ProductRating value={4} />

                        <p className="font-sans">{product.desc}</p>

                        <div className="mt-auto flex items-center justify-between">
                            <p className="font-sans font-semibold">
                                {product.price.toFixed(2)} €
                            </p>
                            <Button
                                variant="primary"
                                size="sm"
                                className="font-sans"
                            >
                                Ajouter au panier
                            </Button>
                        </div>

                        <SectionContainer>
                            <div className="max-w-4xl mx-auto">
                                <ProductAttributesTable attributes={ATTRIBUTES} />
                            </div>
                        </SectionContainer>
                    </div>
                </div>
            </SectionContainer>

            {otherProducts.length > 0 && (
                <SectionContainer>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-lg font-sans font-bold mb-6">
                            Vous aimeriez aussi
                        </h2>

                        <ProductGrid
                            products={otherProducts}
                            className="grid grid-cols-4 gap-x-8 gap-y-8"
                        />
                    </div>
                </SectionContainer>
            )}
        </main>
    );
}