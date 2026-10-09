"use client";

import { Controller, useForm } from "react-hook-form";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/tp-kit/components/button";
import { Checkbox } from "@/tp-kit/components/inputs/checkbox";
import { TextInput } from "@/tp-kit/components/inputs/text-input";
import type { ProductsCategoryData } from "@/tp-kit/data/products-category.data";
import type { ProductFilterResult } from "@/app/type";

type Props = {
    categories: ProductsCategoryData[];
    onChange: (filters: ProductFilterResult) => void;
};

type FormValues = {
    search: string;
    categoriesSlug: string[];
};

export function ProductFilters({ categories, onChange }: Props) {
    const { control, handleSubmit } = useForm<FormValues>({
        defaultValues: { search: "", categoriesSlug: [] },
    });

    function onSubmit(values: FormValues) {
        onChange({
            categoriesSlug: values.categoriesSlug,
            search: values.search.trim() || undefined,
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 font-sans">
            <Controller
                name="search"
                control={control}
                render={({ field }) => (
                    <TextInput
                        label="Rechercher"
                        placeholder="Rechercher une boisson"
                        value={field.value}
                        onChange={field.onChange}
                        before={
                            <MagnifyingGlass
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-brand"
                            />
                        }
                        className="pl-12"
                    />
                )}
            />

            <Controller
                name="categoriesSlug"
                control={control}
                render={({ field }) => (
                    <div className="flex flex-col gap-2">
                        {categories.map((category) => (
                            <Checkbox
                                key={category.id}
                                label={`${category.name} (${category.products.length})`}
                                checked={field.value.includes(category.slug)}
                                onChange={(checked) =>
                                    field.onChange(
                                        checked
                                            ? [...field.value, category.slug]
                                            : field.value.filter((s) => s !== category.slug)
                                    )
                                }
                            />
                        ))}
                    </div>
                )}
            />

            <Button type="submit" variant="primary" size="sm" className="font-sans" fullWidth>
                Filtrer
            </Button>
        </form>
    );
}