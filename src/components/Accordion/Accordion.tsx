import type { ReactNode } from "react";

import { cx } from "src/utils/utils";

import { AccordionProvider } from "./AccordionProvider/AccordionProvider";

import type { IAccordionProps } from "./types";

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
