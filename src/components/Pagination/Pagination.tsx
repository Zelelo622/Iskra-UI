import { useState, type ReactNode } from "react";

import { cx } from "src/utils/utils";

import { getPaginationRange } from "./utils";

import type { IPaginationProps } from "./types";

import styles from "./Pagination.module.css";

const DEFAULT_LABELS = {
  previouse: "Previous page",
  next: "Next page",
  page: (page: number) => `Page ${page}`,
};

const Chevron = ({ direction }: { direction: "left" | "right" }): ReactNode => (
  <svg
    className={styles.icon}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points={direction === "left" ? "10 4 6 8 10 12" : "6 4 10 8 6 12"} />
  </svg>
);

export const Pagination = ({
  totalPages,
  page,
  defaultPage = 1,
  onChange,
  siblingCount = 1,
  boundaryCount = 1,
  size = "md",
  disabled,
  labels,
  className,
  "aria-label": ariaLabel = "Pagination",
  ...props
}: IPaginationProps): ReactNode => {
  const [uncontrolledPage, setUncontrolledPage] = useState(defaultPage);

  if (totalPages < 1) {
    return null;
  }

  const isControlled = page !== undefined;
  const rawPage = isControlled ? page : uncontrolledPage;
  const currentPage = Math.min(Math.max(rawPage, 1), totalPages);

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const text = { ...DEFAULT_LABELS, ...labels };

  const goTo = (target: number) => {};

  return <div />;
};

Pagination.displayName = "Pagination";
