import type { SelectHTMLAttributes } from "react";

import type { IFieldProps } from "src/components/FormField";

export interface ISelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "multiple">, IFieldProps {
  placeholder?: string;
}
