import type { ReactNode } from "react";

import { cx } from "src/utils/utils";

import { AccordionItemProvider } from "../AccordionProvider/AccordionItemProvider";

import type { IAccordionItemProps } from "../types";

import styles from "../Accordion.module.css";

export const AccordionItem = ({
  value,
  disabled,
  className,
  children,
  ...props
}: IAccordionItemProps): ReactNode => (
  <AccordionItemProvider value={value} disabled={disabled}>
    <div className={cx(styles.item, disabled && styles.disabled, className)} {...props}>
      {children}
    </div>
  </AccordionItemProvider>
);
