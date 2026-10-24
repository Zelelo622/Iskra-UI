import { Radio } from "./Radio";

import type { IRadioProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Radio",
};

const sizeArgType: ArgType<IRadioProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

export const Basic: Story<IRadioProps> = (props) => <Radio name="demo" {...props} />;
Basic.args = { size: "md", disabled: false };
Basic.argTypes = { size: sizeArgType };

export const Required: Story<IRadioProps> = (props) => (
  <Radio name="demo" label="Новый" required {...props} />
);
Required.args = { size: "md", disabled: false };
Required.argTypes = { size: sizeArgType };

export const WithError: Story<IRadioProps> = (props) => (
  <Radio name="demo" label="Новый" error="Ошибка" {...props} />
);
WithError.args = { size: "md", disabled: false };
WithError.argTypes = { size: sizeArgType };

export const Disabled: Story<IRadioProps> = (props) => (
  <Radio name="demo" label="Новый" disabled {...props} />
);
Disabled.args = { size: "md" };
Disabled.argTypes = { size: sizeArgType };
