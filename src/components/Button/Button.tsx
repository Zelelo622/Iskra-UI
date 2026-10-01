import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cx } from "src/utils/utils";
import styles from "./Button.module.css";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant = "primary", size = "md", type = "button", className, ...props }, ref) => {
    const classes = cx(styles.button, styles[variant], styles[size], className);

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
