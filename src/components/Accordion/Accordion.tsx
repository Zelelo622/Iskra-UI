import { ReactNode } from "react";
import type { IAccordionProps } from "./types";
import { AccordionProvider } from "./AccordionProvider/AccordionProvider";
import { cx } from "src/utils/utils";

import styles from "./Accordion.module.css";

export const Accordion = ({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  disabled,
  className,
  children,
  ...props
}: IAccordionProps): ReactNode => (
  <AccordionProvider
    type={type}
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
    disabled={disabled}
  >
    <div className={cx(styles.accordion, className)} {...props}>
      {children}
    </div>
  </AccordionProvider>
);

Accordion.displayName = "Accordion";
