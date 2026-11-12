import { Tag } from "./Tag";

import type { ITagProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Tag",
};

const sizeArgType: ArgType<ITagProps["size"]> = {
  options: ["sm", "md"],
  control: { type: "radio" },
};

export const TagGray: Story<ITagProps> = (props) => (
  <div style={{ display: "inline-flex", flexDirection: "column", gap: "1rem" }}>
    <Tag {...props} />
    <Tag {...props}>Текст</Tag>
  </div>
);
TagGray.args = { color: "gray" };
TagGray.argTypes = { size: sizeArgType };

export const TagBlue: Story<ITagProps> = (props) => (
  <div style={{ display: "inline-flex", flexDirection: "column", gap: "1rem" }}>
    <Tag {...props} />
    <Tag {...props}>Текст</Tag>
  </div>
);
TagBlue.args = { color: "blue" };
TagBlue.argTypes = { size: sizeArgType };

export const TagGreen: Story<ITagProps> = (props) => (
  <div style={{ display: "inline-flex", flexDirection: "column", gap: "1rem" }}>
    <Tag {...props} />
    <Tag {...props}>Текст</Tag>
  </div>
);
TagGreen.args = { color: "green" };
TagGreen.argTypes = { size: sizeArgType };

export const TagRed: Story<ITagProps> = (props) => (
  <div style={{ display: "inline-flex", flexDirection: "column", gap: "1rem" }}>
    <Tag {...props} />
    <Tag {...props}>Текст</Tag>
  </div>
);
TagRed.args = { color: "red" };
TagRed.argTypes = { size: sizeArgType };
