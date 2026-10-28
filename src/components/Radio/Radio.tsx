import { forwardRef, useContext, useId, type ChangeEvent } from "react";

import { cx } from "src/utils/utils";

import { RadioGroupContext } from "../RadioGroup/RadioGroupProvider/context";

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
      value,
      checked,
      onChange,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const group = useContext(RadioGroupContext);

    const autoId = useId();
    const radioId = id ?? autoId;

    const hasError = Boolean(error);
    const messageId = hasError ? `${radioId}-message` : undefined;
    const describeBy = [ariaDescribedBy, messageId].filter(Boolean).join(" ") || undefined;

    const inputName = group ? group.name : name;
    const isChecked = group ? group.value === String(value) : checked;
    const isDisabled = group?.disabled || disabled;
    const isRequired = group ? group.required : required;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      group?.onChange(event.target.value);
    };

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
            name={inputName}
            type="radio"
            value={value}
            checked={isChecked}
            onChange={handleChange}
            className={styles.input}
            disabled={isDisabled}
            required={isRequired}
            aria-describedby={describeBy}
            {...props}
          />
          {label}
          {required && !group && (
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
