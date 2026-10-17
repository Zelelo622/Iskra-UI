import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface IAccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue"> {
  type?: "single" | "multiple";
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
}

export interface IAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

export type IAccordionTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;
export type IAccordionContentProps = HTMLAttributes<HTMLDivElement>;
