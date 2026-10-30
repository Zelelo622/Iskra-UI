import { forwardRef } from "react";

import { FormField } from "src/components/FormField";
import { cx } from "src/utils/utils";

import type { ISelectProps } from "./types";

import styles from "./Select.module.css";

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  (
    {
      size = "md",
      label,
      hint,
      error,
      placeholder,
      value,
      defaultValue,
      className,
      id,
      required,
      disabled,
      children,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const initialValue = isControlled
      ? undefined
      : (defaultValue ?? (placeholder !== undefined ? "" : undefined));

    return (
      <FormField
        id={id}
        size={size}
        label={label}
        hint={hint}
        error={error}
        required={required}
        disabled={disabled}
        className={className}
        aria-describedby={ariaDescribedBy}
      >
        {({ controlProps, boxClassName }) => (
          <div className={cx(boxClassName, styles.box)}>
            <select
              ref={ref}
              {...controlProps}
              value={value}
              defaultValue={initialValue}
              required={required}
              disabled={disabled}
              className={styles.select}
              {...props}
            >
              {placeholder !== undefined && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {children}
            </select>

            <svg
              className={styles.chevron}
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="4 6 8 10 12 6" />
            </svg>
          </div>
        )}
      </FormField>
    );
  },
);

Select.displayName = "Select";
