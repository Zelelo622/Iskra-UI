import { forwardRef, useId } from "react";

import { cx } from "src/utils/utils";

import type { IRadioProps } from "./types";

import styles from "./Radio.module.css";

export const Radio = forwardRef<HTMLInputElement, IRadioProps>(
  (
    {
      size = "md",
      label,
      error,
      className,
      disabled,
      required,
      id,
      name,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const radioId = id ?? autoId;

    const hasError = Boolean(error);
    const messageId = hasError ? `${radioId}-message` : undefined;
    const describeBy = [ariaDescribedBy, messageId].filter(Boolean).join(" ") || undefined;

    return (
      <div
        className={cx(
          styles.root,
          styles[size],
          disabled && styles.disabled,
          hasError && styles.hasError,
          className,
        )}
      >
        <label className={styles.label}>
          <input
            ref={ref}
            id={radioId}
            name={name}
            type="radio"
            className={styles.input}
            disabled={disabled}
            required={required}
            aria-describedby={describeBy}
            {...props}
          />
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              {" *"}
            </span>
          )}
        </label>
        {hasError && (
          <p id={messageId} className={styles.error}>
            {error}
          </p>
        )}
      </div>
    );
  },
);

Radio.displayName = "Radio";
