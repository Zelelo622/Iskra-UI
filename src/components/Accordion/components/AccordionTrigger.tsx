import { ReactNode } from "react";
import { cx } from "src/utils/utils";
import { useAccordion } from "../hooks/useAccordion";
import { useAccordionItem } from "../hooks/useAccordionItem";
import { IAccordionTriggerProps } from "../types";

import styles from "../Accordion.module.css";

export const AccordionTrigger = ({
  className,
  children,
  disabled: triggerDisabled,
  ...props
}: IAccordionTriggerProps): ReactNode => {
  const { toggleItem } = useAccordion();
  const { value, isOpen, baseId, disabled } = useAccordionItem();

  const isDisabled = disabled || triggerDisabled;

  return (
    <h3 className={styles.header}>
      <button
        type="button"
        id={`trigger-${baseId}`}
        aria-expanded={isOpen}
        aria-controls={`content-${baseId}`}
        disabled={isDisabled}
        className={cx(styles.trigger, className)}
        onClick={() => toggleItem(value)}
        {...props}
      >
        {children}
        <svg
          className={cx(styles.icon, isOpen && styles.iconOpen)}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </h3>
  );
};

AccordionTrigger.displayName = "AccordionTrigger";
