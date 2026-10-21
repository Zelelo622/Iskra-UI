import type { InputHTMLAttributes, ReactNode } from "react";

export interface ISwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: "sm" | "md" | "lg";
  label?: ReactNode;
  className?: string;
}
