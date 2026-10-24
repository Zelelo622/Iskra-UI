import type { HTMLAttributes } from "react";

import type { SPINNER_VARIANTS } from "./constants";

export type TSpinnerVariant = keyof typeof SPINNER_VARIANTS;

export interface ISpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TSpinnerVariant;
  size?: "sm" | "md" | "lg";
  label?: string;
  color?: string;
}
