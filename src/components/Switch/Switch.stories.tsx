import { Switch } from "./Switch";

import type { ISwitchProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Switch",
};

const sizeArgType: ArgType<ISwitchProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

export const Basic: Story<ISwitchProps> = (props) => <Switch {...props} />;
Basic.args = { size: "md", disabled: false };
Basic.argTypes = { size: sizeArgType };

export const WithLabel: Story<ISwitchProps> = (props) => <Switch {...props} label="Уведомления" />;
WithLabel.args = { size: "md", disabled: false };
WithLabel.argTypes = { size: sizeArgType };
