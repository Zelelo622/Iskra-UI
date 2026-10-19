import { Placement } from "@floating-ui/react";
import { HTMLAttributes, ReactNode } from "react";

export interface ITooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  content: ReactNode;
  children: ReactNode;
  placement?: Placement;
  delay?: number;
}