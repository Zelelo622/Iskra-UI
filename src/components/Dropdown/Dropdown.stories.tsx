import { useState } from "react";

import { Button } from "../Button/Button";
import { Drawer } from "../Drawer";
import { Modal } from "../Modal";

import { Dropdown } from "./Dropdown";

import type { IDropdownProps, TDropdownItem } from "./types";
import type { Placement } from "@floating-ui/react";
import type { Story } from "@ladle/react";

export default {
  title: "Dropdown",
};

const log = (action: string) => () => console.log(action);

const BASIC_ITEMS: TDropdownItem[] = [
  { label: "Редактировать", onSelect: log("edit") },
  { label: "Копировать", onSelect: log("copy") },
  { label: "Поделиться", onSelect: log("share") },
  { type: "divider" },
  { label: "Удалить", onSelect: log("delete"), danger: true },
];

const PLACEMENTS: Placement[] = ["bottom-start", "bottom-end", "top-start", "top-end"];

export const Basic: Story<IDropdownProps> = (props) => (
  <div style={{ padding: "4rem" }}>
    <Dropdown {...props} trigger={<Button>Действия</Button>} items={BASIC_ITEMS} />
  </div>
);
Basic.args = {};

export const WithIcons: Story<IDropdownProps> = (props) => (
  <div style={{ padding: "4rem" }}>
    <Dropdown
      {...props}
      trigger={<Button>С иконками</Button>}
      items={[
        { label: "Редактировать", icon: "✏️", onSelect: log("edit") },
        { label: "Копировать", icon: "📋", onSelect: log("copy") },
        { type: "divider" },
        { label: "Удалить", icon: "🗑️", onSelect: log("delete"), danger: true },
      ]}
    />
  </div>
);
WithIcons.args = {};

export const Disabled: Story<IDropdownProps> = (props) => (
  <div style={{ padding: "4rem" }}>
    <Dropdown
      {...props}
      trigger={<Button>С недоступными пунктами</Button>}
      items={[
        { label: "Редактировать", onSelect: log("edit") },
        { label: "Копировать", onSelect: log("copy"), disabled: true },
        { label: "Поделиться", onSelect: log("share") },
        { type: "divider" },
        { label: "Удалить", onSelect: log("delete"), danger: true, disabled: true },
      ]}
    />
  </div>
);
Disabled.args = {};

export const Placements: Story<IDropdownProps> = (props) => (
  <div style={{ padding: "12rem 4rem", display: "flex", gap: "2rem", justifyContent: "center" }}>
    {PLACEMENTS.map((placement) => (
      <Dropdown
        {...props}
        key={placement}
        placement={placement}
        trigger={<Button>{placement}</Button>}
        items={BASIC_ITEMS}
      />
    ))}
  </div>
);
Placements.args = {};

export const TriggerWithOwnOnClick: Story<IDropdownProps> = (props) => (
  <div style={{ padding: "4rem" }}>
    <Dropdown
      {...props}
      trigger={<Button onClick={log("trigger click")}>Свой onClick</Button>}
      items={BASIC_ITEMS}
    />
  </div>
);
TriggerWithOwnOnClick.args = {};

export const ControlledAlwaysOpen: Story<IDropdownProps> = (props) => (
  <div style={{ padding: "4rem" }}>
    <Dropdown
      {...props}
      open
      onOpenChange={(next) => console.log("onOpenChange:", next)}
      trigger={<Button>Всегда открыто</Button>}
      items={BASIC_ITEMS}
    />
  </div>
);
ControlledAlwaysOpen.args = {};

export const InsideModal: Story<IDropdownProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "4rem" }}>
      <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Модалка">
        <Dropdown {...props} trigger={<Button>Действия</Button>} items={BASIC_ITEMS} />
      </Modal>
    </div>
  );
};
InsideModal.args = {};

export const InsideDrawer: Story<IDropdownProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "4rem" }}>
      <Button onClick={() => setOpen(true)}>Открыть панель</Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Панель">
        <Dropdown {...props} trigger={<Button>Действия</Button>} items={BASIC_ITEMS} />
      </Drawer>
    </div>
  );
};
InsideDrawer.args = {};
