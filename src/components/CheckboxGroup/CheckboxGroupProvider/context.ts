import { createContext } from "react";

export interface ICheckboxGroupContext {
  name?: string;
  value: string[];
  toggle: (value: string, checked: boolean) => void;
  disabled?: boolean;
  invalid?: boolean;
}

export const CheckboxGroupContext = createContext<ICheckboxGroupContext | null>(null);
