import { create } from "zustand";
import type { CartData, ProductData } from "@/tp-kit/types";

export const useCart = create<CartData>()(() => ({
    lines: [],
}));

/**
 * Ajoute une nouvelle ligne au panier.
 * Si le produit est déjà dans le panier, augmente la quantité de 1.
 * 
 * @param product 
 */
export function addLine(product: ProductData) {
    useCart.setState((state) => {
        const existingLine = state.lines.find(
            (line) => line.product.id === product.id
        );

        if (existingLine) {
            return {
                lines: state.lines.map((line) =>
                    line.product.id === product.id
                        ? { ...line, qty: line.qty + 1 }
                        : line
                ),
            };
        }

        return {
            lines: [...state.lines, { product, qty: 1 }],
        };
    });
}

/**
 * Modifie une ligne produit du panier
 * 
 * @param line 
 */
export function updateLine(
    productId: ProductData["id"],
    qty: number
) {
    const safeQty = Math.max(1, Math.floor(qty) || 1);

    useCart.setState((state) => ({
        lines: state.lines.map((line) =>
            line.product.id === productId
                ? { ...line, qty: safeQty }
                : line
        ),
    }));
}

/**
 * Supprime la ligne produit du panier 
 * 
 * @param productId 
 * @returns 
 */
export function removeLine(productId: ProductData["id"]) {
    useCart.setState((state) => ({
        lines: state.lines.filter(
            (line) => line.product.id !== productId
        ),
    }));
}

/**
 * Vide le contenu du panier actuel
 */
export function clearCart() {
    useCart.setState({ lines: [] });
}