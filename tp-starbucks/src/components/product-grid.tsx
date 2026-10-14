import { Button } from "@/tp-kit/components/button";
import { ProductCardLayout } from "@/tp-kit/components/products/product-card-layout";
import type { ProductData } from "@/tp-kit/types";
import { AddToCartButton } from "./add-to-cart-button/add-to-cart-button";

type Props = {
    products: ProductData[];
    className?: string;
};

export function ProductGrid({
    products,
    className = "grid grid-cols-4 gap-x-30 gap-y-8 p-20",
}: Props) {
    return (
        <ul className={className}>
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCardLayout
                        product={product}
                        className="font-montserrat text-sm font-semibold"
                        button={
                            <AddToCartButton product={product} />
                        }
                    />
                </li>
            ))}
        </ul>
    );
}