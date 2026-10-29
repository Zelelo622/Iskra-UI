import type { HTMLAttributes } from "react";

import type { TCssSize } from "src/utils/utils";

export interface IDividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  thickness?: TCssSize;
  labelPosition?: "start" | "center" | "end";
}
