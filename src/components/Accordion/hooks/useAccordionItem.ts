import { useContext } from "react";
import { AccordionItemContext, TAccordionItemContextValue } from "../context";

export const useAccordionItem = (): TAccordionItemContextValue => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("useAccordionItem использован вне AccordionItem");
  }
  return context;
};
