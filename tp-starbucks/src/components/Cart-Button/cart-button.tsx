"use client";

import type { ButtonHTMLAttributes } from "react";
import { ShoppingCart, X } from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/hooks/use-cart";
import { Popover } from "@/tp-kit/components/popover";
import Cart from "@/components/cart/cart";

export function CartButton() {
    const lines = useCart((state) => state.lines);

    return (
        <Popover
            align="end"
            trigger={(props, state) => (
                <button
                    {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
                    type="button"
                    aria-label={
                        state.open
                            ? "Fermer le panier"
                            : "Ouvrir le panier"
                    }
                    className="relative flex items-center gap-2 font-sans cursor-pointer"
                >
                    {state.open ? (
                        <X size={24} />
                    ) : (
                        <ShoppingCart size={24} />
                    )}

                    {lines.length > 0 && (
                        <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-700 px-1 text-xs text-white">
                            {lines.length}
                        </span>
                    )}
                </button>
            )}
        >
            <div className="w-80 max-w-[90vw]">
                <Cart />
            </div>
        </Popover>
    );
}