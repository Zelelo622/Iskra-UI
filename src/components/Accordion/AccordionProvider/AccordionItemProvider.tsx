import { ReactNode, useId } from "react";
import { useAccordion } from "../hooks/useAccordion";
import { AccordionItemContext } from "../context";

interface IAccardionItemProviderProps {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

export const AccordionItemProvider = ({
  value,
  disabled: itemDisabled,
  children,
}: IAccardionItemProviderProps): ReactNode => {
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
