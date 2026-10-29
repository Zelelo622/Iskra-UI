import type { TextareaHTMLAttributes } from "react";

import type { IFieldProps } from "src/components/FormField";

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, IFieldProps {
  resize?: "vertical" | "none";
}
