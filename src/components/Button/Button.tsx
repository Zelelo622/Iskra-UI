import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant = "primary", size = "md", type = "button", className, ...props }, ref) => {
    const variantClass = styles[variant];
    const sizeClass = styles[size];
    const classes = [styles.button, variantClass, sizeClass, className]
      .filter(Boolean)
      .join(" ");

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
