import { type CSSProperties, type ReactNode } from "react";

import { cx, toCss } from "src/utils/utils";

import type { IDividerProps } from "./types";

import styles from "./Divider.module.css";

export const Divider = ({
  orientation = "horizontal",
  decorative = false,
  thickness,
  labelPosition = "center",
  className,
  style,
  children,
  ...props
}: IDividerProps): ReactNode => {
  const hasLabel = Boolean(children) && orientation === "horizontal";

  const classes = cx(
    styles.divider,
    styles[orientation],
    hasLabel && styles.withLabel,
    hasLabel && styles[labelPosition],
    className,
  );

  return (
    <div
      className={classes}
      style={{ ...style, "--divider-thickness": toCss(thickness) } as CSSProperties}
      role={hasLabel ? undefined : decorative ? "none" : "separator"}
      aria-orientation={!decorative && orientation === "vertical" ? "vertical" : undefined}
      {...props}
    >
      {hasLabel && <span className={styles.label}>{children}</span>}
    </div>
  );
};

Divider.displayName = "Divider";
