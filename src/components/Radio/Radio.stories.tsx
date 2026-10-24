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

export const Basic: Story<IRadioProps> = (props) => (
  <Radio label="Молоко" error="Не купишь ты его" required {...props} />
);
Basic.args = { size: "md", disabled: false };
Basic.argTypes = { size: sizeArgType };
