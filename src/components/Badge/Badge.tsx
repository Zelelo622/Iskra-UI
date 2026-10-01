import { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.css";

export interface IBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  color?: "red" | "green" | "blue";
  count?: number;
  max?: number;
}

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
  const colorClass = styles[color];
  const classes = [styles.badge, isDot ? styles.dot : styles.count, colorClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {isDot ? null : formatCount(count, max)}
    </span>
  );
};

Badge.displayName = "Badge";
