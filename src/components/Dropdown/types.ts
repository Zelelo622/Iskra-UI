import type { HTMLAttributes, ReactElement, ReactNode } from "react";

import type { Placement } from "@floating-ui/react";

export interface IDropdownAction {
  type?: "item";
  label: string;
  onSelect: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  danger?: boolean;
}

export interface IDropdownDivider {
  type: "divider";
}

export type TDropdownItem = IDropdownAction | IDropdownDivider;

export interface IDropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  trigger: ReactElement;
  items: TDropdownItem[];
  /** Расположение меню относительно триггера. По умолчанию `"bottom-start"`. */
  placement?: Placement;
  /** Открыто ли меню. Если передан - меню управляемое, состоянием владеет родитель. */
  open?: boolean;
  /** Открыто ли меню при первом рендере (неуправляемый режим). По умолчанию `false`. */
  defaultOpen?: boolean;
  /** Вызывается при открытии и закрытии меню - в обоих режимах. */
  onOpenChange?: (open: boolean) => void;
}
