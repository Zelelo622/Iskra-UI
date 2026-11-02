import { useState } from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

import { Drawer } from "./Drawer";

import type { IDrawerProps } from "./types";
import type { ArgTypes, Story } from "@ladle/react";

export default {
  title: "Drawer",
};

type DrawerStoryProps = Pick<
  IDrawerProps,
  "title" | "placement" | "size" | "customSize" | "footer" | "children" | "closable"
> & {
  onClose: () => void;
};

const DrawerDemo = ({ onClose, ...props }: DrawerStoryProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть панель</Button>
      <Drawer {...props} open={open} onClose={handleClose} />
    </>
  );
};

const argTypes: ArgTypes<DrawerStoryProps> = {
  placement: {
    options: ["right", "left", "top", "bottom"],
    control: { type: "radio" },
    defaultValue: "right",
  },
  size: {
    options: ["sm", "md", "lg"],
    control: { type: "radio" },
    defaultValue: "md",
  },
  onClose: { action: "onClose" },
};

export const Default: Story<DrawerStoryProps> = (props) => (
  <DrawerDemo
    {...props}
    footer={
      <>
        <Button variant="secondary" onClick={props.onClose}>
          Отмена
        </Button>
        <Button onClick={props.onClose}>Сохранить</Button>
      </>
    }
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Input label="Имя" />
      <Input label="Email" type="email" />
    </div>
  </DrawerDemo>
);
Default.args = { title: "Редактирование профиля" };
Default.argTypes = argTypes;

export const LongContent: Story<DrawerStoryProps> = (props) => (
  <DrawerDemo {...props} footer={<Button onClick={props.onClose}>Понятно</Button>}>
    {Array.from({ length: 40 }, (_, i) => (
      <p key={i}>Пункт {i + 1}. Прокручивается только тело, шапка и футер остаются на месте.</p>
    ))}
  </DrawerDemo>
);
LongContent.args = { title: "Фильтры" };
LongContent.argTypes = argTypes;

export const WithoutTitle: Story<DrawerStoryProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть меню</Button>
      <Drawer {...props} open={open} onClose={() => setOpen(false)} aria-label="Главное меню">
        Без заголовка панели нужен aria-label, а крестик остаётся.
      </Drawer>
    </>
  );
};
WithoutTitle.args = { placement: "left", size: "sm" };
WithoutTitle.argTypes = argTypes;

export const BottomSheet: Story<DrawerStoryProps> = (props) => (
  <DrawerDemo {...props}>Нижняя панель - удобна на мобильных.</DrawerDemo>
);
BottomSheet.args = { title: "Поделиться", placement: "bottom", size: "sm" };
BottomSheet.argTypes = argTypes;

export const CustomSize: Story<DrawerStoryProps> = (props) => (
  <DrawerDemo {...props}>
    customSize перекрывает size. На узком экране панель всё равно не шире окна.
  </DrawerDemo>
);
CustomSize.args = { title: "Своя ширина", customSize: 720 };
CustomSize.argTypes = argTypes;

export const ConfirmClose: Story = () => {
  const [open, setOpen] = useState(false);
  const [dirty, setDirty] = useState(false);

  const handleClose = () => {
    if (!dirty || window.confirm("Закрыть без сохранения?")) {
      setOpen(false);
      setDirty(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть форму</Button>
      <Drawer open={open} onClose={handleClose} title="Новая заметка">
        <Input label="Текст" onChange={() => setDirty(true)} />
      </Drawer>
    </>
  );
};
