import { HTMLAttributes } from "react";
import { TCssSize } from "src/utils/utils";

export interface ISkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "text" | "rect" | "circle";
  width?: TCssSize;
  height?: TCssSize;
  radius?: TCssSize;
  lines?: number;
  animation?: "pulse" | "wave";
  loading?: boolean;
}