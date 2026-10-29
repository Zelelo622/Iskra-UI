import type { ReactNode } from "react";

export type TFieldSize = "sm" | "md" | "lg";

export interface IFieldProps {
  size?: TFieldSize;
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

export interface IFormFieldRenderProps {
  controlProps: {
    id: string;
    "aria-describedby"?: string;
    "aria-invalid"?: true;
  };
  boxClassName: string;
}

export interface IFormFieldProps extends IFieldProps {
  id?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  "aria-describedby"?: string;
  children: (field: IFormFieldRenderProps) => ReactNode;
}
