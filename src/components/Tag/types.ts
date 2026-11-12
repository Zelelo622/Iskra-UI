import type { HTMLAttributes } from "react";

export interface ITagProps extends HTMLAttributes<HTMLSpanElement> {
  color?: "gray" | "blue" | "green" | "red";
  size?: "sm" | "md";
  onRemove?: () => void;
  removeLabel?: string;
}
