import getProductCategories from "@/lib/queries";

// Components
import { SectionContainer } from "@/tp-kit/components/section-container";
import { BreadCrumbs } from "@/tp-kit/components/breadcrumbs";
import { ProductGrid } from "@/components/product-grid";

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
                        {category.name} ({category.products.length})
                    </h2>

                    <ProductGrid products={category.products} />
                </SectionContainer>
            ))}
        </main>
    );
}