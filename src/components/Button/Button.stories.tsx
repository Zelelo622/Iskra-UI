import type { Story } from "@ladle/react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button";

export default {
  title: "Button",
};

export const Primary: Story<ButtonProps> = (props) => <Button {...props}>Primary</Button>;
Primary.args = { variant: "primary", disabled: false };

export const Secondary: Story<ButtonProps> = (props) => <Button {...props}>Secondary</Button>;
Secondary.args = { variant: "secondary", disabled: false };
