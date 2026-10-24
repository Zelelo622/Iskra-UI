import { type ReactNode, useId } from "react";

import { AccordionItemContext } from "../context";
import { useAccordion } from "../hooks/useAccordion";

interface IAccordionItemProviderProps {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

export const AccordionItemProvider = ({
  value,
  disabled: itemDisabled,
  children,
}: IAccordionItemProviderProps): ReactNode => {
  const { openValues, disabled: rootDisabled } = useAccordion();

  const isOpen = openValues.includes(value);
  const disabled = rootDisabled || itemDisabled;

  const baseId = useId();

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, baseId, disabled }}>
      {children}
    </AccordionItemContext.Provider>
  );
};
