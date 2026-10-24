import { useState } from "react";

import { Checkbox } from "./Checkbox";

import type { ICheckboxProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Checkbox",
};

const sizeArgType: ArgType<ICheckboxProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

export const Basic: Story<ICheckboxProps> = (props) => <Checkbox {...props} />;
Basic.args = { size: "md", disabled: false };
Basic.argTypes = { size: sizeArgType };

export const Required: Story<ICheckboxProps> = (props) => (
  <Checkbox label="Принимаю условия" required {...props} />
);
Required.args = { size: "md", disabled: false };
Required.argTypes = { size: sizeArgType };

const FRUITS = ["Яблоки", "Груши", "Сливы"];

const IndeterminateDemo = (props: ICheckboxProps) => {
  const [selected, setSelected] = useState<string[]>(["Груши"]);

  const allSelected = selected.length === FRUITS.length;
  const someSelected = selected.length > 0 && !allSelected;

  const toggleAll = () => setSelected(allSelected ? [] : FRUITS);
  const toggle = (fruit: string) =>
    setSelected((prev) =>
      prev.includes(fruit) ? prev.filter((item) => item !== fruit) : [...prev, fruit],
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Checkbox
        {...props}
        label="Выбрать все"
        checked={allSelected}
        indeterminate={someSelected}
        onChange={toggleAll}
      />
      <div
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "1.5rem" }}
      >
        {FRUITS.map((fruit) => (
          <Checkbox
            key={fruit}
            {...props}
            label={fruit}
            checked={selected.includes(fruit)}
            onChange={() => toggle(fruit)}
          />
        ))}
      </div>
    </div>
  );
};

export const Indeterminate: Story<ICheckboxProps> = (props) => <IndeterminateDemo {...props} />;
Indeterminate.args = { size: "md", disabled: false };
Indeterminate.argTypes = { size: sizeArgType };
