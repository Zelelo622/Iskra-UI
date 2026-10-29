import { forwardRef } from "react";

import { FormField } from "src/components/FormField";
import { cx } from "src/utils/utils";

import type { IInputProps } from "./types";

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
  ) => (
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
          {startIcon && <span className={styles.icon}>{startIcon}</span>}
          <input
            ref={ref}
            {...controlProps}
            required={required}
            disabled={disabled}
            className={styles.input}
            {...props}
          />
          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </div>
      )}
    </FormField>
  ),
);

Input.displayName = "Input";
