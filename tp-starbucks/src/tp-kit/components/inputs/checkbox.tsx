"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";

import React from "react";
import { cn } from "@/tp-kit/lib/utils";

type Props = Omit<BaseCheckbox.Root.Props, 'id' | 'onChange'> & {
  label: React.ReactNode;
  onChange?: (checked: boolean) => void
};

export const Checkbox: React.FC<Props> = function ({ label, onChange, className, ...props }) {
  const id = React.useId();

  return (
    <div className="flex flex-row items-center hover:text-brand">
      <BaseCheckbox.Root
        id={id}
        className={cn(
          "mr-2 inline-flex size-4.5 shrink-0 items-center justify-center rounded border-2 border-current bg-transparent outline-offset-4 outline-brand transition-colors data-checked:border-brand data-checked:bg-brand data-checked:text-white",
          className,
        )}
        {...props}
        onCheckedChange={(checked) => onChange?.(checked)}
      >
        <BaseCheckbox.Indicator className="text-inherit">
          <CheckIcon strokeWidth={3} size={12} />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      <label
        htmlFor={id}
        className="cursor-pointer select-none transition-colors"
      >
        {label}
      </label>
    </div>
  );
};
