import { CSSProperties, ReactNode } from "react";
import { cx } from "src/utils/utils";
import type { ISpinnerProps } from "./types";
import { SPINNER_VARIANTS } from "./constants";

import styles from "./Spinner.module.css";

export const Spinner = ({
  variant = "circle",
  size = "md",
  label = "Загрузка",
  color,
  className,
  style,
  ...props
}: ISpinnerProps): ReactNode => {
  const { items } = SPINNER_VARIANTS[variant];

  return (
    <span
      role="status"
      aria-label={label}
      className={cx(styles.spinner, styles[variant], styles[size], className)}
      style={{ ...style, ...(color && { color }) }}
      {...props}
    >
      {Array.from({ length: items }, (_, i) => (
        <span key={i} className={styles.item} style={{ "--i": i } as CSSProperties} />
      ))}
    </span>
  );
};

Spinner.displayName = "Spinner";
