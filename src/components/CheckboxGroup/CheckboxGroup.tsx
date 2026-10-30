import { useId, type ReactElement } from "react";

import { cx } from "src/utils/utils";

import { CheckboxGroupProvider } from "./CheckboxGroupProvider/CheckboxGroupProvider";

import type { ICheckboxGroupProps } from "./types";

import styles from "./CheckboxGroup.module.css";

export const CheckboxGroup = ({
  value,
  defaultValue,
  onChange,
  name,
  label,
  hint,
  error,
  required,
  disabled,
  orientation = "vertical",
  className,
  children,
  "aria-describedby": ariaDescribedBy,
  ...props
}: ICheckboxGroupProps): ReactElement => {
  const messageId = useId();

  const hasError = Boolean(error);
  const message = hasError ? error : hint;
  const describedBy =
    [ariaDescribedBy, message ? messageId : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <CheckboxGroupProvider
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      invalid={hasError}
    >
      <fieldset
        className={cx(styles.root, className)}
        disabled={disabled}
        aria-describedby={describedBy}
        {...props}
      >
        {label && (
          <legend className={styles.legend}>
            {label}
            {required && (
              <span className={styles.required} aria-hidden="true">
                {" *"}
              </span>
            )}
          </legend>
        )}

        <div className={cx(styles.options, styles[orientation])}>{children}</div>

        {message && (
          <p id={messageId} className={cx(styles.message, hasError && styles.error)}>
            {message}
          </p>
        )}
      </fieldset>
    </CheckboxGroupProvider>
  );
};

CheckboxGroup.displayName = "CheckboxGroup";
