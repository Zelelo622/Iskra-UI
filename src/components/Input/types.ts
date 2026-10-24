import type { InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix"
> {
  size?: "sm" | "md" | "lg";
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}
