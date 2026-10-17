import { ReactNode } from "react";
import { IAccordionItemProps } from "../types";
import { AccordionItemProvider } from "../AccordionProvider/AccordionItemProvider";
import { cx } from "src/utils/utils";

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
