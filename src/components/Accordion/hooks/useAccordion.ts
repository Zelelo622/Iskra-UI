import { useContext } from "react";

import { AccordionContext } from "../context";

import type { TAccordionContextValue } from "../context";

export const useAccordion = (): TAccordionContextValue => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion использован вне Accordion");
  }
  return context;
};
