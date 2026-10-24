import type { ReactElement } from "react";
import { forwardRef, useEffect, useId, useImperativeHandle, useRef } from "react";

import { cx } from "src/utils/utils";

import type { ICheckboxProps } from "./types";

import styles from "./Checkbox.module.css";

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  (
    {
      size = "md",
      label,
      indeterminate,
      error,
      className,
      disabled,
      required,
      id,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ): ReactElement => {
    const innerRef = useRef<HTMLInputElement>(null);
    const autoId = useId();
    const checkboxId = id ?? autoId;

    const hasError = Boolean(error);
    const messageId = hasError ? `${checkboxId}-message` : undefined;
    const describeBy = [ariaDescribedBy, messageId].filter(Boolean).join(" ") || undefined;

    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, []);

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = Boolean(indeterminate);
      }
    }, [indeterminate]);

    return (
      <div className={cx(styles.root, styles[size], disabled && styles.disabled, className)}>
        <label className={styles.label}>
          <input
            id={checkboxId}
            ref={innerRef}
            type="checkbox"
            className={styles.input}
            disabled={disabled}
            required={required}
            aria-invalid={hasError || undefined}
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

Checkbox.displayName = "Checkbox";
