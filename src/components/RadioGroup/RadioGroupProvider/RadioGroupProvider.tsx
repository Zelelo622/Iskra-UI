import { useId, useState, type ReactElement, type ReactNode } from "react";

import { RadioGroupContext } from "./context";

interface IRadioGroupProviderProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  children: ReactNode;
}

export const RadioGroupProvider = ({
  name,
  value: controlledValue,
  defaultValue,
  onChange,
  disabled,
  required,
  children,
}: IRadioGroupProviderProps): ReactElement => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;

  const autoId = useId();
  const finalName = name ?? `radiogroup-${autoId}`;

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider
      value={{
        name: finalName,
        value: currentValue,
        onChange: handleChange,
        disabled,
        required,
      }}
    >
      {children}
    </RadioGroupContext.Provider>
  );
};
