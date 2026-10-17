import { ReactNode } from "react";
import styles from "../Accordion.module.css";
import { IAccordionContentProps } from "../types";
import { useAccordionItem } from "../hooks/useAccordionItem";
import { cx } from "src/utils/utils";

export const AccordionContent = ({
  className,
  children,
  ...props
}: IAccordionContentProps): ReactNode => {
  const { isOpen, baseId } = useAccordionItem();

  return (
    <div
      id={`content-${baseId}`}
      role="region"
      aria-labelledby={`trigger-${baseId}`}
      className={cx(styles.contentWrapper, isOpen && styles.contentWrapperOpen, className)}
      {...props}
    >
      <div className={styles.contentInner}>{children}</div>
    </div>
  );
};

AccordionContent.displayName = "AccordionContent";
