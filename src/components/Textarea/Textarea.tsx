import { forwardRef } from "react";

import { FormField } from "src/components/FormField";
import { cx } from "src/utils/utils";

import type { ITextareaProps } from "./types";

import styles from "./Textarea.module.css";

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      size = "md",
      label,
      hint,
      error,
      resize = "vertical",
      rows = 3,
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
        <textarea
          ref={ref}
          {...controlProps}
          rows={rows}
          required={required}
          disabled={disabled}
          className={cx(boxClassName, styles.textarea, resize === "none" && styles.resizeNone)}
          {...props}
        />
      )}
    </FormField>
  ),
);

Textarea.displayName = "Textarea";
