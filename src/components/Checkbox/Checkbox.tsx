import type { ChangeEvent, ReactElement } from "react";
import { forwardRef, useContext, useEffect, useId, useImperativeHandle, useRef } from "react";

import { cx } from "src/utils/utils";

import { CheckboxGroupContext } from "../CheckboxGroup/CheckboxGroupProvider/context";

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
      name,
      value,
      checked,
      onChange,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ): ReactElement => {
    const group = useContext(CheckboxGroupContext);
    const innerRef = useRef<HTMLInputElement>(null);
    const autoId = useId();
    const checkboxId = id ?? autoId;

    const hasError = Boolean(error);
    const messageId = hasError ? `${checkboxId}-message` : undefined;
    const describeBy = [ariaDescribedBy, messageId].filter(Boolean).join(" ") || undefined;

    const inputName = group ? group.name : name;
    const isChecked = group ? group.value.includes(String(value)) : checked;
    const isDisabled = group?.disabled || disabled;
    const isInvalid = hasError || group?.invalid;

    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, []);

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = Boolean(indeterminate);
      }
    }, [indeterminate]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      group?.toggle(event.target.value, event.target.checked);
    };

    return (
      <div className={cx(styles.root, styles[size], isDisabled && styles.disabled, className)}>
        <label className={styles.label}>
          <input
            id={checkboxId}
            ref={innerRef}
            type="checkbox"
            name={inputName}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            className={styles.input}
            disabled={isDisabled}
            required={group ? undefined : required}
            aria-invalid={isInvalid || undefined}
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

Checkbox.displayName = "Checkbox";
