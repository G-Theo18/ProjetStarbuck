"use client";

import { PopoverTriggerState, Popover as Primitive } from '@base-ui/react/popover';

import { ComponentProps, HTMLProps, ReactElement, ReactNode } from 'react';

type PositionnerProps =  ComponentProps<typeof Primitive.Positioner>;

type Props = {
  trigger: (props: HTMLProps<"button">, state: PopoverTriggerState) => ReactElement;
  children?: ReactNode;
  align?: PositionnerProps['align'];
  alignOffset?: PositionnerProps['alignOffset'];
  sideOffset?: PositionnerProps['sideOffset'];
}

export function Popover(props: Props) {
  return (
    <Primitive.Root>
      <Primitive.Trigger
        render={props.trigger}
      />

      <Primitive.Portal>
        <Primitive.Positioner sideOffset={props.sideOffset ?? 24} alignOffset={props.alignOffset ?? 0} align={props.align} className={"z-50"}>
          <Primitive.Popup className="relative flex h-(--popup-height,auto) w-(--popup-width,auto) max-w-125 flex-col gap-1 origin-(--transform-origin) bg-white p-6 rounded-lg border border-gray-100 shadow-xl transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0">
            {props.children}
          </Primitive.Popup>
        </Primitive.Positioner>
      </Primitive.Portal>
    </Primitive.Root>
  );
}
