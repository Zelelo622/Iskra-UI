import type { InputHTMLAttributes, ReactNode } from "react";

export interface IRadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "name"
> {
  size?: "sm" | "md" | "lg";
  label?: ReactNode;
  error?: ReactNode;
  className?: string;
  name?: string;
}
