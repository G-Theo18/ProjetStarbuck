import { type VariantProps, cva } from "class-variance-authority";
import React, { MouseEventHandler } from "react";
import { cn } from "@/tp-kit/lib/utils";

const buttonClasses = cva(
  "transition-colors rounded-lg tracking-wide focus-visible:outline-none font-semibold cursor-pointer",
  {
    variants: {
      /**
       * Definit l'apparence du bouton
       * @default primary
       */
      variant: {
        primary:
          "bg-brand hover:bg-brand-600 active:bg-brand-700 disabled:bg-brand-900 disabled:cursor-not-allowed text-white",
        ghost: "bg-transparent hover:bg-black/5 active:bg-black/10 disabled:bg-black/5",
        white: "bg-white text-default hover:bg-stone-50 active:bg-stone-100",
        outline: "bg-transparent hover:bg-black/5 active:bg-black/10 border-2 border-default",
        light: "bg-brand-100 text-brand-900 hover:bg-brand-200",
        danger: "bg-red-100 text-red-900 hover:bg-red-200"
      },
      /**
       * Modifie la taille du boutton
       * @default md
       */
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-4 text-sm",
        lg: "px-6 py-4 text-lg",
      },
      /**
       * Indique si le bouton occupera tout l'espace horizontal
       */
      fullWidth: { true: "w-full" },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonClasses> & {
  /**
   * Le contenu du bouton
   */
  children?: React.ReactNode;
  /**
   * Action déclenchée au clic
   */
  onClick?: MouseEventHandler<any>;
  /**
   * Classes HTML optionnelles
   */
  className?: string,
  /**
   * L'attribut HTML `type` du boutton
   * @default button
   */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
  /**
   * Désactive le bouton
   * @default false
   */
  disabled?: boolean,
};

/**
 * Sers à rendre les différents boutons du site. Le composant est disponibles en plusieurs `variants`
 */
const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={cn(buttonClasses({ variant: props.variant, size: props.size, fullWidth: props.fullWidth }), props.className)}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";
export { Button };