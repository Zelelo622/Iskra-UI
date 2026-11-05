import type { HTMLAttributes, ReactNode } from "react";

export interface IAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
}
