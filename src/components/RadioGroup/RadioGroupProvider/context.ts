import { createContext } from "react";

export interface IRadioGroupContext {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
}

export const RadioGroupContext = createContext<IRadioGroupContext | null>(null);
