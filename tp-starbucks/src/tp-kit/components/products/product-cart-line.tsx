"use client";

import { Button } from "@/tp-kit/components/button";
import { FormattedPrice } from "@/tp-kit/components/data-display/formatted-price";
import React, { useEffect, useState } from "react";
import { ProductData } from "@/tp-kit/types";
import { X } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/tp-kit/lib/utils";

type Props = {
  /**
   * Les données produit de la ligne
   */
  product: ProductData;
  /**
   * Fonction appelée lorsque l'utilisateur clique sur le bouton de suppression de la ligne
   * @returns
   */
  onDelete: () => void;
  /**
   * Fonction appelée lorsque l'utilisateur modifie la quantité de la ligne
   * @param qty
   * @returns
   */
  onQtyChange: (qty: number) => void;
  /**
   * La quantité initiale de la ligne produit
   */
  qty: number | null;
  /**
   * Classe HTML optionnelle
   */
  className?: string;

  /**
   * Le sous total de la ligne
   */
  subTotal?: number;
};

const MIN = 1;

/**
 * Affichage d'une ligne produit dans le panier
 */
export const ProductCartLine: React.FC<Props> = function ({
  product,
  qty,
  onDelete,
  onQtyChange,
  className,
  subTotal
}) {
  const [q, setQ] = useState<string>(qty?.toString() ?? '');
  useEffect(() => {
    setQ(qty?.toString() ?? '')
  }, [qty])

  const increment = () => {
    const newQty = qty === null 
      ? MIN 
      : qty + 1;

    onQtyChange?.(newQty);
    return newQty;
  };

  const decrement = () => {
    const newQty = qty === null || (qty - 1) < MIN 
      ? MIN 
      : qty - 1;

    onQtyChange?.(newQty);
    return newQty;

  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQ(e.target.value)
  };

  const handleBlur:React.FocusEventHandler<HTMLInputElement> = (e) => {
    onQtyChange?.(e.target.value.length < 1 
      ? MIN 
      : Number(e.target.value)
    ); 
  }

  return (
    <div className={cn(className, "text-sm")}>
      <div className="mb-2 flex flex-row items-center justify-between gap-4">
        <h3 className="w-full">{product.name}</h3>

        <Button
          size={"sm"}
          variant={"ghost"}
          className="px-2!"
          onClick={onDelete}
        >
          <X size={14} weight="bold" className="text-red-400" />
        </Button>
      </div>

      <div className="flex justify-between">
        <div className="flex h-auto w-[100px] items-center overflow-hidden rounded-lg bg-gray-100 text-default">
          <Button
            variant={"ghost"}
            className="rounded-none! px-3! py-2!"
            onClick={decrement}
          >
            –
          </Button>

          <input
            type="number"
            value={q}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border-none bg-transparent text-center outline-none"
            min={MIN}
            step={1}
          />

          <Button
            variant={"ghost"}
            className="rounded-none! px-3! py-2!"
            onClick={increment}
          >
            +
          </Button>
        </div>
        {subTotal !== undefined && (
          <p className="flex flex-row items-center justify-between gap-4 text-base">
            <FormattedPrice
              className="text-right"
              price={subTotal}
            />
          </p>
        )}
      </div>
    </div>
  );
};
