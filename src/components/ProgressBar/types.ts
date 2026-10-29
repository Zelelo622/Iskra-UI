import type { HTMLAttributes } from "react";

export interface IProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "accent" | "success" | "danger";
}
