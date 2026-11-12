import type { HTMLAttributes, ReactNode } from "react";

export type TToastVariant = "info" | "success" | "warning" | "error";

export interface IToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TToastVariant;
  title?: string;
  closable?: boolean;
  closeLabel?: string;
  children?: ReactNode;
  duration?: number;
  onClose?: () => void;
}
