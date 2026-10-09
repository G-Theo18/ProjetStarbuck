import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/tp-kit/lib/utils";

const variants = cva("", {
  variants: {
    size: {
      display: "text-2xl lg:text-6xl font-bold",
      xl: "text-xl lg:text-3xl font-bold",
      lg: "text-lg lg:text-xl font-bold",
      md: "text-base uppercase font-bold",
      sm: "text-sm uppercase",
    },
    variant: {
      brand: "text-brand",
      black: "text-slate-800",
    },
  },
  defaultVariants: {
    variant: "black",
  }
});


type Props = VariantProps<typeof variants> & {
  /**
   * Définie la balise HTML utilisée pour rendre le titre
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /**
   * Des classes CSS optionnelles permettant d'ajuster le style du titre dans des contextes précis
   */
  className?: string;
  /**
   * Le contenu du titre
   */
  children?: React.ReactNode;
};

/**
 * Composant servant à rendre un titre d'une page ou d'une section. 
 * - La propriété `as` permet de changer la balise HTML à utiliser
 * - La propriété `szie` influence la taille de la police
 */
export const Heading: React.FC<Props> = function ({
  as: Comp,
  className = "",
  children,
  ...props
}) {
  return <Comp className={cn(variants(props), className)}>{children}</Comp>;
};

