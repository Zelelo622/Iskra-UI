import { useId, type ReactNode } from "react";

import { cx } from "src/utils/utils";

import type { IFormFieldProps } from "./types";

import styles from "./FormField.module.css";

export const FormField = ({
  id,
  label,
  hint,
  error,
  required,
  disabled,
  size = "md",
  className,
  "aria-describedby": ariaDescribedBy,
  children,
}: IFormFieldProps): ReactNode => {
  const autoId = useId();
  const controlId = id ?? autoId;

  const hasError = Boolean(error);
  const message = hasError ? error : hint;
  const messageId = message ? `${controlId}-message` : undefined;
  const describedBy = [ariaDescribedBy, messageId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cx(styles.root, styles[size], className)}>
      {label && (
        <label htmlFor={controlId} className={styles.label}>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              {" *"}
            </span>
          )}
        </label>
      )}

      {children({
        controlProps: {
          id: controlId,
          "aria-describedby": describedBy,
          "aria-invalid": hasError || undefined,
        },
        boxClassName: cx(styles.box, hasError && styles.invalid, disabled && styles.disabled),
      })}

      {message && (
        <p id={messageId} className={cx(styles.message, hasError && styles.error)}>
          {message}
        </p>
      )}
    </div>
  );
};

FormField.displayName = "FormField";
