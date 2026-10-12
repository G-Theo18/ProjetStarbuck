"use client";

import { Button } from "@/tp-kit/components/button";
import { Heading } from "@/tp-kit/components/heading";
import { FormattedPrice } from "@/tp-kit/components/data-display/formatted-price";
import { ProductCartLine } from "@/tp-kit/components/products/product-cart-line";
import { ProductCardLayout } from "@/tp-kit/components/products/product-card-layout";
import { SectionContainer } from "@/tp-kit/components/section-container";
import { PRODUCTS_CATEGORY_DATA } from "@/tp-kit/data/products-category.data";
import { useState } from "react";

const products = PRODUCTS_CATEGORY_DATA[0].products.slice(0, 3);

export default function DevCartPage() {
    const [qty1, setQty1] = useState<number>(1);
    const [qty2, setQty2] = useState<number>(2);
    const [showFirst, setShowFirst] = useState(true);
    const [showSecond, setShowSecond] = useState(true);

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
                        product={product }
                        button={<Button variant="ghost" fullWidth className="font-sans font-semibold">Ajouter au panier</Button>}
                        className="font-sans font-semibold"
                    />
                ))}
            </section>

            {/* Panier */}
            <section className="w-full lg:w-1/3 space-y-8">
                <div className="bg-white rounded-lg p-6 border border-coffee-100">
                    <Heading as="h2" size="sm" variant="black" className="font-sans font-semibold">
                        Mon panier
                    </Heading>

                    <div className="mt-6 space-y-6">
                        {showFirst && (
                            <ProductCartLine
                                product={products[0]}
                                qty={qty1}
                                onQtyChange={setQty1}
                                onDelete={() => setShowFirst(false)}
                                className="font-sans font-semibold"
                            />
                        )}

                        {showSecond && (
                            <ProductCartLine
                                product={products[1]}
                                qty={qty2}
                                onQtyChange={setQty2}
                                onDelete={() => setShowSecond(false)}
                                className="font-sans font-semibold"
                            />
                        )}
                    </div>

                    {/* Total fixé en dur pour le TP */}
                    <div className="mt-6 border-t border-coffee-100 pt-4 flex justify-between items-center">
                        <span className="font-sans font-semibold">Total</span>
                        <FormattedPrice price={12.50} className="font-sans font-semibold" />
                    </div>

                    <Button className="font-sans mt-6" fullWidth>
                        Commander
                    </Button>
                </div>
                {/* /Panier */}
                <Button variant={"outline"} fullWidth className="font-sans font-semibold">Vider le panier</Button>
            </section>
        </SectionContainer>
    );
}