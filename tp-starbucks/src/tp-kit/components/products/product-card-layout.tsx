import React from "react";
import { ProductImage } from "@/tp-kit/components/products/product-image";
import Link from "next/link";
import { ProductData } from "@/tp-kit/types";
import { FormattedPrice } from "@/tp-kit/components/data-display/formatted-price";

type Props = {
  /**
   * Classes HTML additionnelles
   */
  className?: string;
  /**
   * Données produits
   */
  product: ProductData;
  /**
   * Un composant bouton qui sera affiché dans la carte
   */
  button: React.ReactNode;
};

/**
 * Base d'affichage pour un produit. **Il ne reste plus qu'à ajouter un joli bouton** !
 */
export const ProductCardLayout: React.FC<Props> = function (props) {
  const productUrl = `/${props.product.path}`;

  return (
    <div className={props.className}>
      <div className="overflow-hidden rounded-lg cursor-pointer">
        <Link href={productUrl}>
          <ProductImage
            className="w-full! h-auto!"
            height={200}
            width={200}
            {...props.product}
          />
        </Link>
      </div>

      <div className="mt-4">
        <div className="flex flex-row justify-between items-center gap-4 mb-2">
          <h3 className="tracking-tight uppercase truncate flex-1 link">
            <Link href={productUrl}>{props.product.name}</Link>
          </h3>

          <p className="w-[4rem] text-right">
            <FormattedPrice price={props.product.price} />
          </p>
        </div>

        <div className="flex flex-row justify-between items-end gap-8">
          {props.button}
        </div>
      </div>
    </div>
  );
};