import { InputHTMLAttributes, ReactNode } from "react";

export interface ICheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  size?: "sm" | "md" | "lg";
  label?: ReactNode;
  indeterminate?: boolean;
  error?: ReactNode;
  className?: string;
}
