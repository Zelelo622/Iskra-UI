import { useState } from "react";

import { Checkbox } from "../Checkbox";

import { CheckboxGroup } from "./CheckboxGroup";

import type { Story } from "@ladle/react";

export default {
  title: "CheckboxGroup",
};

const options = (
  <>
    <Checkbox value="email" label="Email" />
    <Checkbox value="sms" label="SMS" />
    <Checkbox value="push" label="Push-уведомления" />
  </>
);

export const Basic: Story = () => (
  <CheckboxGroup label="Уведомления" defaultValue={["email"]}>
    {options}
  </CheckboxGroup>
);

export const Controlled: Story = () => {
  const [value, setValue] = useState<string[]>(["sms"]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <CheckboxGroup label="Уведомления" value={value} onChange={setValue}>
        {options}
      </CheckboxGroup>
      <code>{JSON.stringify(value)}</code>
    </div>
  );
};

export const WithValidation: Story = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroup
      label="Уведомления"
      required
      hint="Выберите хотя бы один способ"
      error={value.length === 0 ? "Выберите хотя бы один способ" : undefined}
      value={value}
      onChange={setValue}
    >
      {options}
    </CheckboxGroup>
  );
};

export const Horizontal: Story = () => (
  <CheckboxGroup label="Уведомления" orientation="horizontal">
    {options}
  </CheckboxGroup>
);

export const Disabled: Story = () => (
  <CheckboxGroup label="Уведомления" defaultValue={["push"]} disabled>
    {options}
  </CheckboxGroup>
);
