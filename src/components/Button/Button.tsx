import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    const variantClass = variant === "primary" ? styles.primary : styles.secondary;
    const classes = [styles.button, variantClass, className].filter(Boolean).join(" ");

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
