import { HTMLAttributes, ReactNode } from "react";

export interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  closable?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}