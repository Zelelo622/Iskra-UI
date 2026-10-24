import type { CSSProperties, ReactNode } from "react";

import { cx, toCss } from "src/utils/utils";

import type { ISkeletonProps } from "./types";

import styles from "./Skeleton.module.css";

export const Skeleton = ({
  variant = "text",
  width,
  height,
  radius,
  lines = 1,
  animation = "pulse",
  loading = true,
  className,
  style,
  children,
  ...props
}: ISkeletonProps): ReactNode => {
  if (!loading) {
    return children;
  }

  const baseClasses = cx(styles.skeleton, styles[variant], styles[animation]);

  const sizeStyle: CSSProperties = {
    width: toCss(width),
    height: toCss(variant === "circle" ? (height ?? width) : height),
    borderRadius: toCss(radius),
  };

  if (variant === "text" && lines > 1) {
    return (
      <span
        className={cx(styles.lines, className)}
        style={{ width: sizeStyle.width, ...style }}
        aria-hidden="true"
        {...props}
      >
        {Array.from({ length: lines }, (_, i) => (
          <span
            key={i}
            className={baseClasses}
            style={{ ...sizeStyle, width: i === lines - 1 ? "70%" : "100%" }}
          />
        ))}
      </span>
    );
  }

  return (
    <span
      className={cx(baseClasses, children != null && styles.withChildren, className)}
      style={{ ...sizeStyle, ...style }}
      aria-hidden="true"
      {...props}
    >
      {children != null && <span className={styles.hidden}>{children}</span>}
    </span>
  );
};

Skeleton.displayName = "Skeleton";
