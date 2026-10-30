import { useState, type ReactElement, type ReactNode } from "react";

import { CheckboxGroupContext } from "./context";

interface ICheckboxGroupProviderProps {
  name?: string;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  invalid?: boolean;
  children: ReactNode;
}

export const CheckboxGroupProvider = ({
  name,
  value: controlledValue,
  defaultValue = [],
  onChange,
  disabled,
  invalid,
  children,
}: ICheckboxGroupProviderProps): ReactElement => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;

  const toggle = (item: string, checked: boolean) => {
    const next = checked
      ? [...currentValue.filter((v) => v !== item), item]
      : currentValue.filter((v) => v !== item);

    if (!isControlled) {
      setUncontrolledValue(next);
    }
    onChange?.(next);
  };

  return (
    <CheckboxGroupContext.Provider value={{ name, value: currentValue, toggle, disabled, invalid }}>
      {children}
    </CheckboxGroupContext.Provider>
  );
};
