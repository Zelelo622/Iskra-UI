import type { ReactElement } from "react";

import { Textarea } from "./Textarea";

import type { ITextareaProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Textarea",
};

const sizeArgType: ArgType<ITextareaProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

const Wrapper = ({ children }: { children: ReactElement }): ReactElement => (
  <div style={{ width: "400px" }}>{children}</div>
);

export const Basic: Story<ITextareaProps> = (props) => (
  <Wrapper>
    <Textarea {...props} label="Комментарий" placeholder="Напишите что-нибудь..." />
  </Wrapper>
);
Basic.args = { size: "md" };
Basic.argTypes = { size: sizeArgType };

export const Hint: Story<ITextareaProps> = (props) => (
  <Wrapper>
    <Textarea {...props} label="О себе" />
  </Wrapper>
);
Hint.args = { size: "md", hint: "Не больше 500 символов", maxLength: 500 };
Hint.argTypes = { size: sizeArgType };

export const Error: Story<ITextareaProps> = (props) => (
  <Wrapper>
    <Textarea {...props} label="Комментарий" />
  </Wrapper>
);
Error.args = { size: "md", error: "Поле обязательно", required: true };
Error.argTypes = { size: sizeArgType };

export const Disabled: Story<ITextareaProps> = (props) => (
  <Wrapper>
    <Textarea {...props} label="Комментарий" defaultValue="Нельзя редактировать" />
  </Wrapper>
);
Disabled.args = { size: "md", disabled: true };
Disabled.argTypes = { size: sizeArgType };

export const NoResize: Story<ITextareaProps> = (props) => (
  <Wrapper>
    <Textarea {...props} label="Фиксированная высота" />
  </Wrapper>
);
NoResize.args = { size: "md", resize: "none", rows: 5 };
NoResize.argTypes = { size: sizeArgType };
