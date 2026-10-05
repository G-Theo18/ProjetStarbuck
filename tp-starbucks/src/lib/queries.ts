import { notFound } from "next/navigation";
import { PRODUCTS_CATEGORY_DATA, ProductsCategoryData} from "@/tp-kit/data/products-category.data";

export default function getProductCategories(): ProductsCategoryData[] {
    return PRODUCTS_CATEGORY_DATA;
}

export async function getCategoryFromSlug(slug: string): Promise<ProductsCategoryData> {
    const category = PRODUCTS_CATEGORY_DATA.find(
        (category) => category.slug === slug
    );

    if (!category) {
        notFound();
    }

    return category;
}