import type { ReactNode } from "react";

import { cx } from "src/utils/utils";

import type { ITagProps } from "./types";

import styles from "./Tag.module.css";

export const Tag = ({
  color = "gray",
  size = "md",
  onRemove,
  removeLabel = "Удалить",
  className,
  children,
  ...props
}: ITagProps): ReactNode => (
  <span className={cx(styles.tag, styles[color], styles[size], className)} {...props}>
    <span className={styles.label}>{children}</span>
    {onRemove && (
      <button
        type="button"
        className={styles.remove}
        aria-label={typeof children === "string" ? `${removeLabel}: ${children}` : removeLabel}
        onClick={onRemove}
      >
        ×
      </button>
    )}
  </span>
);

Tag.displayName = "Tag";
