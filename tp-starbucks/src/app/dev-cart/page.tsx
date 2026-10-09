"use client";
import { Button } from "@/tp-kit/components/button";
import { Heading } from "@/tp-kit/components/heading";
import { ProductCardLayout } from "@/tp-kit/components/products/product-card-layout";
import { SectionContainer } from "@/tp-kit/components/section-container";
import { PRODUCTS_CATEGORY_DATA } from "@/tp-kit/data/products-category.data";
const products = PRODUCTS_CATEGORY_DATA[0].products.slice(0, 3);

export default function DevCartPage() {
  return (
    <SectionContainer
      className="py-36"
      wrapperClassName="flex flex-col lg:flex-row gap-24"
    >
      {/* Produits */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
        {products.map((product) => (
          <ProductCardLayout
            key={product.id}
            product={product}
            button={<Button variant={"ghost"} fullWidth>Ajouter au panier</Button>}
          />
        ))}
      </section>
      {/* /Produits */}

      <section className="w-full lg:w-1/3 space-y-8">
        {/* Panier */}
        <div className="bg-white rounded-lg p-6 border border-coffee-100">
          <Heading as="h2" size="sm">
            Panier
          </Heading>

          {/* --> CONTENU DU PANIER <-- */}
        </div>
        {/* /Panier */}

        <Button variant={"outline"} fullWidth>Vider le panier</Button>
      </section>
    </SectionContainer>
  );
}