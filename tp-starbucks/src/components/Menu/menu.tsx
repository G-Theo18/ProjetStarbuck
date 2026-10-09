import { MenuBar } from "@/tp-kit/components/menu-bar";
import { CartButton } from "../Cart-Button/cart-button";

export function Menu() {
    return (
        <MenuBar
            trailing={
                <section className="flex items-center justify-end">
                    <CartButton />
                </section>
            }
        />
    );
}