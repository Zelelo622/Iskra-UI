import type { HTMLAttributes, ReactNode } from "react";

export interface IRadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  label?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  disabled?: boolean;
}
