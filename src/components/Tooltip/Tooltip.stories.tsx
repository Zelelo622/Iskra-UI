import { Story } from "@ladle/react";
import { Tooltip } from "./Tooltip";
import { ITooltipProps } from "./types";
import { Button } from "../Button/Button";
import { Placement } from "@floating-ui/react";

export default {
  title: "Tooltip",
};

const PLACEMENT_GROUPS: Placement[][] = [
  ["top-start", "top", "top-end"],
  ["bottom-start", "bottom", "bottom-end"],
  ["left-start", "left", "left-end"],
  ["right-start", "right", "right-end"],
];

export const Basic: Story<ITooltipProps> = (props) => (
  <div style={{ padding: "4rem", display: "flex", justifyContent: "center" }}>
    <Tooltip {...props} content="Это подсказка">
      <Button>Наведи на меня</Button>
    </Tooltip>
  </div>
);
Basic.args = {};

export const Placements: Story<ITooltipProps> = (props) => (
  <div
    style={{
      padding: "6rem",
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      alignItems: "center",
    }}
  >
    {PLACEMENT_GROUPS.map((group) => (
      <div key={group[0]} style={{ display: "flex", gap: "2rem" }}>
        {group.map((placement) => (
          <Tooltip {...props} key={placement} content={placement} placement={placement}>
            <Button>{placement}</Button>
          </Tooltip>
        ))}
      </div>
    ))}
  </div>
);
Placements.args = {};

export const LongContent: Story<ITooltipProps> = (props) => (
  <div style={{ padding: "4rem", display: "flex", justifyContent: "center" }}>
    <Tooltip
      {...props}
      content="Это очень длинная подсказка, которая должна переноситься на несколько строк, чтобы проверить максимальную ширину компонента."
    >
      <Button>Длинный текст</Button>
    </Tooltip>
  </div>
);
LongContent.args = {};
