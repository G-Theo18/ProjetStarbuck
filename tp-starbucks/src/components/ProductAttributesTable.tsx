import { ProductRating } from "@/tp-kit/components/products/product-rating";

export type ProductAttribute = {
    label: string;
    rating: number;
};

type Props = {
    attributes: ProductAttribute[];
};

export function ProductAttributesTable({ attributes }: Props) {
    return (
        <table className="w-full font-sans text-sm">
            <tbody>
                {attributes.map((attribute) => (
                    <tr
                        key={attribute.label}
                        className="border-b border-border last:border-b-0"
                    >
                        <th scope="row" className="py-4 text-left font-semibold">
                            {attribute.label}
                        </th>
                        <td className="py-4">
                            <div className="flex justify-end">
                                <ProductRating icon="circle" value={attribute.rating} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}