import type { HTMLAttributes } from "react";

export interface IPaginationLabels {
  previous?: string;
  next?: string;
  page?: (page: number) => string;
}

export interface IPaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  totalPages: number;
  page?: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  labels?: IPaginationLabels;
}
