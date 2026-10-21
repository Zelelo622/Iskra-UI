import { forwardRef, useId } from "react";
import { IInputProps } from "./types";
import { cx } from "src/utils/utils";

import styles from "./Input.module.css";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      size = "md",
      label,
      hint,
      error,
      startIcon,
      endIcon,
      className,
      id,
      required,
      disabled,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id ?? autoId;

    const hasError = Boolean(error);
    const message = hasError ? error : hint;
    const messageId = message ? `${inputId}-message` : undefined;
    const describeBy = [ariaDescribedBy, messageId].filter(Boolean).join(" ") || undefined;

    return (
      <div className={cx(styles.root, className)}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}{" "}
            {required && (
              <span className={styles.required} aria-hidden="true">
                {" *"}
              </span>
            )}
          </label>
        )}
        <div
          className={cx(
            styles.field,
            styles[size],
            hasError && styles.invalid,
            disabled && styles.disabled,
          )}
        >
          {startIcon && <span className={styles.icon}>{startIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            required={required}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-describedby={describeBy}
            className={styles.input}
            {...props}
          />
          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </div>
        {message && (
          <p id={messageId} className={cx(styles.message, hasError && styles.error)}>
            {message}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
