import { CSSProperties, HTMLAttributes, ReactNode } from "react";

import styles from "./Spinner.module.css";
import { cx } from "src/utils/utils";

const SPINNER_VARIANTS = {
  circle: { items: 0 },
  dots: { items: 3 },
  spiral: { items: 5 },
  propagate: { items: 6 },
} as const satisfies Record<string, { items: number }>;

export type TSpinnerVariant = keyof typeof SPINNER_VARIANTS;

export interface ISpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TSpinnerVariant;
  size?: "sm" | "md" | "lg";
  label?: string;
  color?: string;
}

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
