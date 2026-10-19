import { forwardRef } from "react";
import { cx } from "src/utils/utils";
import type { IButtonProps } from "./types";

import styles from "./Button.module.css";

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant = "primary", size = "md", type = "button", className, ...props }, ref) => {
    const classes = cx(styles.button, styles[variant], styles[size], className);

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
