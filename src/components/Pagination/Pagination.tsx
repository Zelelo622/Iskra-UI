import { useState, type ReactNode } from "react";

import { cx } from "src/utils/utils";

import { getPaginationRange } from "./utils";

import type { IPaginationProps } from "./types";

import styles from "./Pagination.module.css";

const DEFAULT_LABELS = {
  previous: "Previous page",
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

  const goTo = (target: number) => {
    if (disabled || target === currentPage || target < 1 || target > totalPages) {
      return;
    }
    if (!isControlled) {
      setUncontrolledPage(target);
    }
    onChange?.(target);
  };

  const items = getPaginationRange(currentPage, totalPages, siblingCount, boundaryCount);

  return (
    <nav aria-label={ariaLabel} className={cx(styles.root, styles[size], className)} {...props}>
      <ul className={styles.list}>
        <li>
          <button
            type="button"
            className={styles.item}
            onClick={() => goTo(currentPage - 1)}
            disabled={disabled}
            aria-disabled={isFirst || undefined}
            aria-label={text.previous}
          >
            <Chevron direction="left" />
          </button>
        </li>

        {items.map((item) =>
          typeof item === "number" ? (
            <li key={item}>
              <button
                type="button"
                className={styles.item}
                onClick={() => goTo(item)}
                disabled={disabled}
                aria-current={item === currentPage ? "page" : undefined}
                aria-label={text.page(item)}
              >
                {item}
              </button>
            </li>
          ) : (
            <li key={item} className={styles.ellipsis} aria-hidden="true">
              …
            </li>
          ),
        )}

        <li>
          <button
            type="button"
            className={styles.item}
            onClick={() => goTo(currentPage + 1)}
            disabled={disabled}
            aria-disabled={isLast || undefined}
            aria-label={text.next}
          >
            <Chevron direction="right" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.displayName = "Pagination";
