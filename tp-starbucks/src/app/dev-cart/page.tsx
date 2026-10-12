"use client";

import { Button } from "@/tp-kit/components/button";
import { Heading } from "@/tp-kit/components/heading";
import { FormattedPrice } from "@/tp-kit/components/data-display/formatted-price";
import { ProductCartLine } from "@/tp-kit/components/products/product-cart-line";
import { ProductCardLayout } from "@/tp-kit/components/products/product-card-layout";
import { SectionContainer } from "@/tp-kit/components/section-container";
import { PRODUCTS_CATEGORY_DATA } from "@/tp-kit/data/products-category.data";

import { useCart, addLine, removeLine, clearCart, updateLine } from "@/hooks/use-cart";

const products = PRODUCTS_CATEGORY_DATA[0].products;

export default function DevCartPage() {
    const lines = useCart((state) => state.lines);

    // Calcul automatique du total
    const total = lines.reduce(
        (sum, line) => sum + line.product.price * line.qty,
        0
    );

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
            <section className="w-full lg:w-1/3 space-y-4">
                <div className="bg-white rounded-lg p-6 border border-coffee-100">
                    <Heading
                        as="h2"
                        size="sm"
                        variant="black"
                        className="font-sans font-semibold"
                    >
                        Mon panier
                    </Heading>

                    <div className="mt-6 space-y-6">
                        {lines.length === 0 ? (
                            <p className="text-sm font-montserrat text-gray-500">
                                Votre panier est vide.
                            </p>
                        ) : (
                            lines.map((line) => (
                                <ProductCartLine
                                    key={line.product.id}
                                    product={line.product}
                                    qty={line.qty}
                                    onQtyChange={(qty) =>
                                        updateLine(
                                            line.product.id,
                                            qty
                                        )
                                    }
                                    onDelete={() =>
                                        removeLine(line.product.id)
                                    }
                                    subTotal={
                                        line.product.price * line.qty
                                    }
                                    className="font-sans font-semibold"
                                />
                            ))
                        )}
                    </div>

                    {/* Total */}
                    <div className="mt-6 border-t border-coffee-100 pt-4 flex justify-between items-center">
                        <span className="font-sans font-semibold">
                            Total
                        </span>

                        <FormattedPrice
                            price={total}
                            className="font-sans font-semibold"
                        />
                    </div>

                    <Button
                        className="font-sans mt-6"
                        fullWidth
                        disabled={lines.length === 0}
                    >
                        Commander
                    </Button>
                </div>

                {/* Vider le panier */}
                <Button
                    variant="outline"
                    fullWidth
                    className="font-sans font-semibold"
                    onClick={clearCart}
                    disabled={lines.length === 0}
                >
                    Vider le panier
                </Button>
            </section>
        </SectionContainer>
    );
}