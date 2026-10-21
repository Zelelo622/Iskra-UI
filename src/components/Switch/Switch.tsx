import { forwardRef, ReactElement } from "react";
import type { ISwitchProps } from "./types";
import { cx } from "src/utils/utils";

import styles from "./Switch.module.css";

export const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
  ({ size = "md", label, className, disabled, ...props }, ref): ReactElement => (
    <label className={cx(styles.root, styles[size], disabled && styles.disabled, className)}>
      <input
        ref={ref}
        aria-checked
        type="checkbox"
        role="switch"
        disabled={disabled}
        className={styles.input}
        {...props}
      />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  ),
);
