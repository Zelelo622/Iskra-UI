import { useState } from "react";

interface IUseAccordionStateParams {
  type: "single" | "multiple";
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

export interface IUseAccordionStateReturn {
  openValues: string[];
  toggleItem: (itemValue: string) => void;
}

export const useAccordionState = ({
  type,
  defaultValue = [],
  value: controlledValue,
  onValueChange,
}: IUseAccordionStateParams): IUseAccordionStateReturn => {
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const openValues = isControlled ? controlledValue : uncontrolledValue;

  const toggleItem = (itemValue: string) => {
    const isCurrentlyOpen = openValues.includes(itemValue);

    let nextValue: string[];

    if (type === "single") {
      nextValue = isCurrentlyOpen ? [] : [itemValue];
    } else {
      nextValue = isCurrentlyOpen
        ? openValues.filter((v) => v !== itemValue)
        : [...openValues, itemValue];
    }

    if (!isControlled) {
      setUncontrolledValue(nextValue);
    }
    onValueChange?.(nextValue);
  };

  return { openValues, toggleItem };
};
