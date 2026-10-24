import type { ReactElement } from "react";

import { Input } from "./Input";

import type { IInputProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

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

export const IconStart: Story<IInputProps> = (props) => (
  <InputWrapper>
    <Input {...props} label="Email" placeholder="you@example.com" />
  </InputWrapper>
);
IconStart.args = {
  size: "md",
  startIcon: (
    <svg
      xmlns="http://w3.org"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};
IconStart.argTypes = { size: sizeArgType };

export const IconEnd: Story<IInputProps> = (props) => (
  <InputWrapper>
    <Input {...props} label="Email" placeholder="you@example.com" />
  </InputWrapper>
);
IconEnd.args = {
  size: "md",
  endIcon: (
    <svg
      xmlns="http://w3.org"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};
IconEnd.argTypes = { size: sizeArgType };
