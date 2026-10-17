import { useContext } from "react";
import { AccordionItemContext } from "../context";

export const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("useAccordionItem использован вне AccordionItem");
  }
  return context;
};
