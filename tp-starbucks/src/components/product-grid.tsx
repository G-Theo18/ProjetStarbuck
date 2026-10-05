import { Button } from "@/tp-kit/components/button";
import { ProductCardLayout } from "@/tp-kit/components/products/product-card-layout";
import { ProductData } from "@/tp-kit/types";

type Props = {
    products: ProductData[];
};

export function ProductGrid({ products }: Props) {
    return (
        <ul className="grid grid-cols-4 gap-x-30 gap-y-8 p-20">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCardLayout
                        product={product}
                        className="font-montserrat text-sm font-semibold"
                        button={
                            <Button
                                variant="ghost"
                                size="sm"
                                fullWidth
                                className="font-sans"
                            >
                                Ajouter au panier
                            </Button>
                        }
                    />
                </li>
            ))}
        </ul>
    );
}