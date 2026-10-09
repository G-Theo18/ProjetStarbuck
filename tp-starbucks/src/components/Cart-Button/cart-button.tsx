"use client";

import type { ButtonHTMLAttributes } from "react";
import { ShoppingCart, X } from "@phosphor-icons/react/dist/ssr";

import { Popover } from "@/tp-kit/components/popover";

export function CartButton() {
    return (
        <Popover
            align="end"
            trigger={(props, state) => (
                <button
                    {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
                    type="button"
                    aria-label={state.open ? "Fermer le panier" : "Ouvrir le panier"}
                    className="flex items-center gap-2 font-sans cursor-pointer"
                >
                    {state.open ? <X size={24} /> : <ShoppingCart size={24} />}
                    <span>0</span>
                </button>
            )}
        >
            <p className="font-sans text-sm">Votre panier est vide.</p>
        </Popover>
    );
}