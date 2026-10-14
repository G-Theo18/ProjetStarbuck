"use client";

import { Heading } from "@/tp-kit/components/heading";
import { useCart } from "@/hooks/use-cart";

export default function CartCounter() {
    const count = useCart((state) => state.lines.length);

    return (
        <Heading
            as="h1"
            size="sm"
            variant="black"
            className="font-montserrat font-bold"
        >
            Nombre de lignes : {count}
        </Heading>
    );
}