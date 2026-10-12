"use client";

import { Button } from "@/tp-kit/components/button";
import { ProductCardLayout } from "@/tp-kit/components/products/product-card-layout";
import { SectionContainer } from "@/tp-kit/components/section-container";
import { PRODUCTS_CATEGORY_DATA } from "@/tp-kit/data/products-category.data";

import Cart from "@/components/cart/cart";
import { addLine } from "@/hooks/use-cart";

const products = PRODUCTS_CATEGORY_DATA[0].products;

export default function DevCartPage() {
    return (
        <SectionContainer
            className="py-36"
            wrapperClassName="flex flex-col lg:flex-row gap-24"
        >
            {/* Catalogue */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
                {products.map((product) => (
                    <ProductCardLayout
                        key={product.id}
                        product={product}
                        button={
                            <Button
                                variant="ghost"
                                fullWidth
                                className="font-sans font-semibold"
                                onClick={() => addLine(product)}
                            >
                                Ajouter au panier
                            </Button>
                        }
                        className="font-sans font-semibold"
                    />
                ))}
            </section>

            {/* Panier Zustand */}
            <section className="w-full lg:w-1/3">
                <Cart />
            </section>
        </SectionContainer>
    );
}