import { notFound } from "next/navigation";
import { PRODUCTS_CATEGORY_DATA, ProductsCategoryData } from "@/tp-kit/data/products-category.data";

type Product = ProductsCategoryData["products"][number];

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

export async function getProductFromSlug(categorySlug: string, productSlug: string): Promise<Product> {
    const category = await getCategoryFromSlug(categorySlug);

    const product = category.products.find(
        (product) => product.slug === productSlug
    );

    if (!product) {
        notFound();
    }

    return product;
}