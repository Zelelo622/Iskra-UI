import type { HTMLAttributes } from "react";

export interface IPaginationLabels {
  previous?: string;
  next?: string;
  page?: (page: number) => string;
}

export interface IPaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  totalPage: number;
  page?: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  siblingCount?: number;
  boundaryCound?: number;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  labels?: IPaginationLabels;
}
