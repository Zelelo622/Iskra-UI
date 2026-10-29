import type { InputHTMLAttributes, ReactNode } from "react";

import type { IFieldProps } from "src/components/FormField";

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">, IFieldProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
