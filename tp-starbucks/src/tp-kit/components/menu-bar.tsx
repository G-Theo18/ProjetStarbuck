import React from "react";
import Link from "next/link";
import { StarbucksLogo } from "@/tp-kit/components/starbucks-logo";

type Props = {
  /**
   * Un composant optionnel pouvant être rendu à **gauche** de la navbar
   */
  leading?: React.ReactNode,
  /**
   * Un composant optionnel pouvant être rendu à **droite** de la navbar
   */
  trailing?: React.ReactNode,
};

/**
 * La barre de menu du haut du site
 */
export const MenuBar: React.FC<Props> = function ({leading, trailing}) {
  return (
    <nav className="bg-white shadow-2xl shadow-gray-600/10 sticky inset-x-0 top-0 z-20 p-4 lg:px-8">
      <div className="container mx-auto grid grid-cols-3 gap-8 relative">
        {leading ? leading : <section></section>}

        <section className="flex justify-center">
          <Link href={'/'} className="transition-colors hover:bg-black/10 active:bg-black/20 block p-1 rounded-full">
            {/* Logo */}
            <StarbucksLogo
              className="select-none pointer-events-none"
              size={50}
            />
          </Link>
        </section>

        {trailing ? trailing : <section></section>}
      </div>
    </nav>
  );
};