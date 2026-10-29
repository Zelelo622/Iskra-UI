import { Divider } from "./Divider";

import type { IDividerProps } from "./types";
import type { Story } from "@ladle/react";

export default {
  title: "Divider",
};

export const Horizontal: Story<IDividerProps> = (props) => (
  <div style={{ width: "400px", display: "flex", gap: "1rem", flexDirection: "column" }}>
    <span>Профиль</span>
    <Divider {...props} />
    <span>Настройки</span>
  </div>
);
Horizontal.args = { orientation: "horizontal" };

export const Vertical: Story<IDividerProps> = (props) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", height: 32 }}>
    <span>Профиль</span>
    <Divider {...props} />
    <span>Настройки</span>
  </div>
);
Vertical.args = { orientation: "vertical" };

export const WithLabel: Story<IDividerProps> = (props) => (
  <div style={{ width: "400px", display: "flex", gap: "1rem", flexDirection: "column" }}>
    <Divider labelPosition="start" {...props}>
      или
    </Divider>
    <Divider {...props}>или</Divider>
    <Divider labelPosition="end" {...props}>
      или
    </Divider>
  </div>
);
WithLabel.args = { orientation: "horizontal" };
