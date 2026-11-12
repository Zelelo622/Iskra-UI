import type { ReactNode } from "react";

import { cx } from "src/utils/utils";

import { AccordionItemProvider } from "../AccordionProvider/AccordionItemProvider";
import { useAccordion } from "../hooks/useAccordion";

import type { IAccordionItemProps } from "../types";

import styles from "../Accordion.module.css";

export const AccordionItem = ({
  value,
  disabled,
  className,
  children,
  ...props
}: IAccordionItemProps): ReactNode => {
  const { disabled: rootDisabled } = useAccordion();
  const isDisabled = rootDisabled || disabled;

  return (
    <AccordionItemProvider value={value} disabled={disabled}>
      <div className={cx(styles.item, isDisabled && styles.disabled, className)} {...props}>
        {children}
      </div>
    </AccordionItemProvider>
  );
};

AccordionItem.displayName = "AccordionItem";
