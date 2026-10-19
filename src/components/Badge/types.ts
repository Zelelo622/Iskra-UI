import { HTMLAttributes } from "react";

export interface IBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  color?: "red" | "green" | "blue";
  count?: number;
  max?: number;
}