"use client";

import { Button } from "@/tp-kit/components/button";
import type { ProductData } from "@/tp-kit/types";
import { addLine } from "@/hooks/use-cart";

type Props = {
    product: ProductData;
    variant?: "primary" | "ghost";
    fullWidth?: boolean;
};

export function AddToCartButton({ product, variant = "ghost", fullWidth = true }: Props) {
    return (
        <Button
            variant={variant}
            size="sm"
            fullWidth={fullWidth}
            className="font-sans"
            onClick={() => addLine(product)}
        >
            Ajouter au panier
        </Button>
    );
}