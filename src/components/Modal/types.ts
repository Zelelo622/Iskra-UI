import type { DialogHTMLAttributes, ReactNode } from "react";

import type { TCssSize } from "src/utils/utils";

export interface IModalProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  "open" | "title" | "onClose" | "onCancel"
> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  width?: TCssSize;
  closable?: boolean;
  closeLabel?: string;
}
