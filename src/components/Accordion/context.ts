import { createContext } from "react";

export type TAccordionContextValue = {
  openValues: string[];
  toggleItem: (itemValue: string) => void;
  disabled?: boolean;
};

export const AccordionContext = createContext<TAccordionContextValue | null>(null);

export type TAccordionItemContextValue = {
  value: string;
  isOpen: boolean;
  baseId: string;
  disabled?: boolean;
};

export const AccordionItemContext = createContext<TAccordionItemContextValue | null>(null);
