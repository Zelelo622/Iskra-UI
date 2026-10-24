import type { ReactNode } from "react";

import { AccordionContext } from "../context";
import { useAccordionState } from "../hooks/useAccordionState";

interface IAccordionProviderProps {
  type?: "single" | "multiple";
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  children: ReactNode;
}

export const AccordionProvider = ({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  disabled,
  children,
}: IAccordionProviderProps): ReactNode => {
  const { openValues, toggleItem } = useAccordionState({
    type,
    defaultValue,
    value,
    onValueChange,
  });

  return (
    <AccordionContext.Provider value={{ openValues, toggleItem, disabled }}>
      {children}
    </AccordionContext.Provider>
  );
};
