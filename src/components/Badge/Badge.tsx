import { ReactNode } from "react";
import { cx } from "src/utils/utils";
import type { IBadgeProps } from "./types";

import styles from "./Badge.module.css";

const formatCount = (count: number, max: number): string => {
  if (count > max) {
    return `${max}+`;
  }
  return String(count);
};

export const Badge = ({
  color = "blue",
  max = 999,
  count,
  className,
  ...props
}: IBadgeProps): ReactNode => {
  const isDot = count === undefined;
  const classes = cx(styles.badge, isDot ? styles.dot : styles.count, styles[color], className);

  return (
    <span className={classes} {...props}>
      {isDot ? null : formatCount(count, max)}
    </span>
  );
};

Badge.displayName = "Badge";
