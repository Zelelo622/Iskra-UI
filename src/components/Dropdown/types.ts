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
  placement?: Placement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}
