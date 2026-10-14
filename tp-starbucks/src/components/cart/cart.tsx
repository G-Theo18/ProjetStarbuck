"use client";

import { Heading } from "@/tp-kit/components/heading";
import { FormattedPrice } from "@/tp-kit/components/data-display/formatted-price";
import { ProductCartLine } from "@/tp-kit/components/products/product-cart-line";
import { Button } from "@/tp-kit/components/button";

import { useCart, removeLine, updateLine } from "@/hooks/use-cart";

export default function Cart() {
    const lines = useCart((state) => state.lines);

    // Calcul dynamique du total
    const total = lines.reduce(
        (sum, line) => sum + line.product.price * line.qty,
        0
    );

    return (
        <div className="w-full space-y-4">
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
                                    updateLine(line.product.id, qty)
                                }
                                onDelete={() =>
                                    removeLine(line.product.id)
                                }
                                subTotal={line.product.price * line.qty}
                                className="font-sans font-semibold"
                            />
                        ))
                    )}
                </div>

                {/* Total dynamique */}
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
        </div>
    );
}