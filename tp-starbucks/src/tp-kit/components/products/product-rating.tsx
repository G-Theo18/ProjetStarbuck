import React from "react";
import { Circle, Star } from "lucide-react";
import { cn } from "@/tp-kit/lib/utils";

type Props = {
  /**
   * Taille des icônes exprimée en px
   * @default 16
   */
  size?: number,
  /**
   * Note sur entre 0 et 5
   */
  value: number,
  /**
   * Conditionne le type d'icône affichées pour la notation
   * @default star
   */
  icon?: 'star' | 'circle',
  /**
   * Classes HTML additionnelles optionnelles 
   */
  className?: string,
}

/**
 * Utilisé pour affiché une note entre 0 et 5
 */
export const ProductRating: React.FC<Props> = function({icon = 'star', value, size = 16, className}) {
  const symbols: React.ReactElement[] = [];
  for (let i = 0; i < 5; i++) {
    const iconClassName = i < value
      ? "fill-brand text-brand"
      : "text-200 stroke-[2.5]";

    if (icon === "star") {
      symbols.push(<Star className={iconClassName} size={size}/>);
    } else {
      symbols.push(<Circle className={iconClassName} size={size * 0.9} />);
    }
  }

  return <ul className={cn("flex flex-row gap-1 not-prose", className)}>
    {symbols.map((symbol, i) => <li key={i}>{symbol}</li>)}
  </ul>;
};