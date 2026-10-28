import { useId, type ReactElement } from "react";

import { cx } from "src/utils/utils";

import { RadioGroupProvider } from "./RadioGroupProvider/RadioGroupProvider";

import type { IRadioGroupProps } from "./type";

import styles from "./RadioGroup.module.css";

export const RadioGroup = ({
  value,
  defaultValue,
  onChange,
  name,
  label,
  error,
  required,
  disabled,
  className,
  children,
  ...props
}: IRadioGroupProps): ReactElement => {
  const labelId = useId();
  const messageId = useId();
  const hasError = Boolean(error);

  return (
    <RadioGroupProvider
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      required={required}
    >
      <div
        className={cx(styles.root, disabled && styles.disabled, className)}
        role="radiogroup"
        aria-labelledby={label ? labelId : undefined}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? messageId : undefined}
        aria-required={required || undefined}
        {...props}
      >
        {label && (
          <div id={labelId} className={styles.groupLabel}>
            {label}
            {required && (
              <span className={styles.required} aria-hidden="true">
                {" *"}
              </span>
            )}
          </div>
        )}

        <div className={styles.options}>{children}</div>

        {hasError && (
          <p id={messageId} className={styles.error}>
            {error}
          </p>
        )}
      </div>
    </RadioGroupProvider>
  );
};

RadioGroup.displayName = "RadioGroup";
