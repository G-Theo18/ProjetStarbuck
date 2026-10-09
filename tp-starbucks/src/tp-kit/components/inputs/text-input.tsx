import React from "react";
import { cn } from "@/tp-kit/lib/utils";

type Props = Omit<React.ComponentProps<"input">, "onChange"> & {
  /**
   * Le composant label à afficher au dessus de l'input
   */
  label: React.ReactNode;
  /**
   * Définit si le champ est requis ou non. Si oui, affiche un astérisque rouge à côté du label. 
   */
  required?: boolean;
  /**
   * Affiche un message d'erreur sous le champ et le colore en rouge.
   */
  error?: string;
  /**
   * Le callback appelé lorsque la valeur de l'input change
   * @param value La valeur actuelle de l'input
   * @returns 
   */
  onChange?: (value: string) => void;
  /**
   * Composant optionnel affiché avant l'input. Peut être utilisé pour afficher des icônes avant l'input
   */
  before?: React.ReactNode;
  /**
   * Composant optionnel affiché après l'input. Peut être utilisé pour afficher des icônes après l'input
   */
  after?: React.ReactNode;
};

export const TextInput: React.FC<Props> = function ({
  label,
  error,
  required,
  before,
  after,
  ...props
}) {
  const id = React.useId();
  return (
    <div>
      <label htmlFor={id} className="cursor-pointer text-sm">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        {before}
        <input
          {...props}
          id={id}
          onChange={e => props.onChange?.(e.target.value)}
          className={cn(
            "relative w-full overflow-visible rounded-lg bg-gray-100 p-4 text-sm leading-none text-default outline-brand",
            error !== undefined && "border-2 border-red-600",
            props.className,
          )}
        />
        {after}
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};
