import type { ReactElement } from "react";

import { Select } from "./Select";

import type { ISelectProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Select",
};

const sizeArgType: ArgType<ISelectProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

const Wrapper = ({ children }: { children: ReactElement }): ReactElement => (
  <div style={{ width: "400px" }}>{children}</div>
);

const cities = (
  <>
    <option value="msk">Москва</option>
    <option value="spb">Санкт-Петербург</option>
    <option value="kzn">Казань</option>
  </>
);

export const Basic: Story<ISelectProps> = (props) => (
  <Wrapper>
    <Select {...props} label="Город">
      {cities}
    </Select>
  </Wrapper>
);
Basic.args = { size: "md" };
Basic.argTypes = { size: sizeArgType };

export const Placeholder: Story<ISelectProps> = (props) => (
  <Wrapper>
    <Select {...props} label="Город" placeholder="Выберите город">
      {cities}
    </Select>
  </Wrapper>
);
Placeholder.args = { size: "md", required: true, hint: "Нужен для доставки" };
Placeholder.argTypes = { size: sizeArgType };

export const Error: Story<ISelectProps> = (props) => (
  <Wrapper>
    <Select {...props} label="Город" placeholder="Выберите город">
      {cities}
    </Select>
  </Wrapper>
);
Error.args = { size: "md", error: "Выберите город" };
Error.argTypes = { size: sizeArgType };

export const Disabled: Story<ISelectProps> = (props) => (
  <Wrapper>
    <Select {...props} label="Город" defaultValue="spb">
      {cities}
    </Select>
  </Wrapper>
);
Disabled.args = { size: "md", disabled: true };
Disabled.argTypes = { size: sizeArgType };

export const Groups: Story<ISelectProps> = (props) => (
  <Wrapper>
    <Select {...props} label="Фреймворк" placeholder="Выберите">
      <optgroup label="Frontend">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </optgroup>
      <optgroup label="Backend">
        <option value="nest">NestJS</option>
        <option value="django">Django</option>
      </optgroup>
    </Select>
  </Wrapper>
);
Groups.args = { size: "md" };
Groups.argTypes = { size: sizeArgType };
