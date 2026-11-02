import type { DialogHTMLAttributes, ReactNode } from "react";

import type { TCssSize } from "src/utils/utils";

export interface IDrawerProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  "open" | "title" | "onClose" | "onCancel"
> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  customSize?: TCssSize;
  placement?: "right" | "left" | "bottom" | "top";
  closable?: boolean;
  closeLabel?: string;
}
