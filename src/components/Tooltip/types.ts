import type { HTMLAttributes, ReactNode } from "react";

import type { Placement } from "@floating-ui/react";

export interface ITooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  content: ReactNode;
  children: ReactNode;
  placement?: Placement;
  delay?: number;
}
