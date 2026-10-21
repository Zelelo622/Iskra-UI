import { ArgType, Story } from "@ladle/react";
import type { IInputProps } from "./types";
import { Input } from "./Input";
import { ReactElement } from "react";

export default {
  title: "Input",
};

const sizeArgType: ArgType<IInputProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

const InputWrapper = ({ children }: { children: ReactElement }): ReactElement => (
  <div style={{ width: "400px" }}>{children}</div>
);

export const Basic: Story<IInputProps> = (props) => (
  <InputWrapper>
    <Input {...props} label="Email" placeholder="you@example.com" />
  </InputWrapper>
);
Basic.args = { size: "md" };
Basic.argTypes = { size: sizeArgType };

export const Disabled: Story<IInputProps> = (props) => (
  <InputWrapper>
    <Input {...props} label="Email" placeholder="you@example.com" />
  </InputWrapper>
);
Disabled.args = { size: "md", disabled: true };
Disabled.argTypes = { size: sizeArgType };

export const Required: Story<IInputProps> = (props) => (
  <InputWrapper>
    <Input {...props} label="Email" placeholder="you@example.com" />
  </InputWrapper>
);
Required.args = { size: "md", required: true };
Required.argTypes = { size: sizeArgType };

export const Hint: Story<IInputProps> = (props) => (
  <InputWrapper>
    <Input {...props} label="Email" placeholder="you@example.com" />
  </InputWrapper>
);
Hint.args = { size: "md", hint: "Подсказка" };
Hint.argTypes = { size: sizeArgType };

export const Error: Story<IInputProps> = (props) => (
  <InputWrapper>
    <Input {...props} label="Email" placeholder="you@example.com" />
  </InputWrapper>
);
Error.args = { size: "md", error: "Ошибка" };
Error.argTypes = { size: sizeArgType };
