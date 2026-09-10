import type { Story } from "@ladle/react";
import { Button } from "./Button";
import type { IButtonProps } from "./Button";

export default {
  title: "Button",
};

export const Primary: Story<IButtonProps> = (props) => <Button {...props}>Primary</Button>;
Primary.args = { variant: "primary", disabled: false };

export const Secondary: Story<IButtonProps> = (props) => <Button {...props}>Secondary</Button>;
Secondary.args = { variant: "secondary", disabled: false };

export const Disabled: Story<IButtonProps> = (props) => (
  <div style={{ display: "flex", gap: "0.5rem" }}>
    <Button {...props} variant="primary">
      Primary
    </Button>
    <Button {...props} variant="secondary">
      Secondary
    </Button>
  </div>
);
Disabled.args = { disabled: true };
