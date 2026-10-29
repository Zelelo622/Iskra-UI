import type { CSSProperties, ReactNode } from "react";

import { cx } from "src/utils/utils";

import type { IProgressBarProps } from "./types";

import styles from "./ProgressBar.module.css";

export const ProgressBar = ({
  value,
  max = 100,
  size = "md",
  variant = "accent",
  className,
  style,
  ...props
}: IProgressBarProps): ReactNode => {
  const isIndenterminate = value === undefined;
  const safeMax = max > 0 ? max : 100;
  const clamped = isIndenterminate ? 0 : Math.min(Math.max(value, 0), safeMax);
  const percent = (clamped / safeMax) * 100;

  const classes = cx(
    styles.progress,
    styles[size],
    styles[variant],
    isIndenterminate && styles.indeterminate,
    className,
  );

  return (
    <div
      className={classes}
      style={{ ...style, "--progress-offset": `${percent - 100}%` } as CSSProperties}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={isIndenterminate ? undefined : clamped}
      {...props}
    >
      <div className={styles.fill} />
    </div>
  );
};

ProgressBar.displayName = "ProgressBar";
