import type { ArgType, Story } from "@ladle/react";
import { Switch } from "./Switch";
import type { ISwitchProps } from "./types";

export default {
  title: "Switch",
};

const sizeArgType: ArgType<ISwitchProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

export const Basic: Story<ISwitchProps> = (props) => <Switch {...props} label="Уведомления" />;
Basic.args = { size: "md", disabled: false };
Basic.argTypes = { size: sizeArgType };
