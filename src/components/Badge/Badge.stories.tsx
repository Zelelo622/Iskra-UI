import { Story } from "@ladle/react";
import { Badge, IBadgeProps } from "./Badge";

export default {
  title: "Badge",
};

export const BadgeBlue: Story<IBadgeProps> = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Badge {...props} />
    <Badge {...props} count={3} />
    <Badge {...props} count={2000} />
    <Badge {...props} count={7000} max={2000} />
  </div>
);
BadgeBlue.args = {};

export const BadgeRed: Story<IBadgeProps> = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Badge {...props} />
    <Badge {...props} count={3} />
    <Badge {...props} count={2000} />
    <Badge {...props} count={7000} max={2000} />
  </div>
);
BadgeRed.args = { color: "red" };

export const BadgeGreen: Story<IBadgeProps> = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Badge {...props} />
    <Badge {...props} count={3} />
    <Badge {...props} count={2000} />
    <Badge {...props} count={7000} max={2000} />
  </div>
);
BadgeGreen.args = { color: "green" };
