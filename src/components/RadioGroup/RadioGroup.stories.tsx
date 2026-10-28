import { useState } from "react";

import { Radio } from "src/components/Radio/Radio";

import { RadioGroup } from "./RadioGroup";

import type { IRadioGroupProps } from "./types";
import type { Story } from "@ladle/react";

export default {
  title: "RadioGroup",
};

export const Basic: Story<IRadioGroupProps> = (props) => (
  <RadioGroup {...props} label="Выберите ваш любимый фрукт">
    <Radio value="apple" label="Яблоко" />
    <Radio value="banana" label="Банан" />
    <Radio value="orange" label="Апельсин" />
    <Radio value="kiwi" label="Киви" disabled />
  </RadioGroup>
);
Basic.args = { required: false, disabled: false };

export const WithError: Story = () => (
  <RadioGroup label="Выберите пол" error="Пожалуйста, выберите один из вариантов" required>
    <Radio value="male" label="Мужской" />
    <Radio value="female" label="Женский" />
  </RadioGroup>
);

export const Controlled: Story = () => {
  const [value, setValue] = useState("apple");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        Выбрано: <b>{value}</b>
      </div>
      <RadioGroup label="Управляемая группа" value={value} onChange={setValue}>
        <Radio value="apple" label="Яблоко" />
        <Radio value="banana" label="Банан" />
        <Radio value="orange" label="Апельсин" />
      </RadioGroup>
    </div>
  );
};
