import { useState } from "react";
import type { ArgTypes, Story } from "@ladle/react";
import { Modal } from "./Modal";
import type { IModalProps } from "./types";
import { Button } from "../Button/Button";

export default {
  title: "Modal",
};

type ModalStoryProps = Pick<IModalProps, "title" | "size" | "width" | "footer" | "children"> & {
  onClose: () => void;
};

const ModalDemo = ({ onClose, ...props }: ModalStoryProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
      <Modal {...props} open={open} onClose={handleClose} />
    </>
  );
};

const argTypes: ArgTypes<ModalStoryProps> = {
  size: {
    options: ["sm", "md", "lg"],
    control: { type: "radio" },
    defaultValue: "md",
  },
  onClose: { action: "onClose" },
};

export const Default: Story<ModalStoryProps> = (props) => (
  <ModalDemo
    {...props}
    footer={
      <>
        <Button variant="secondary" onClick={props.onClose}>
          Отмена
        </Button>
        <Button onClick={props.onClose}>Удалить</Button>
      </>
    }
  >
    Это действие нельзя отменить. Проект и все его данные будут удалены.
  </ModalDemo>
);
Default.args = { title: "Удалить проект?" };
Default.argTypes = argTypes;

export const WithoutFooter: Story<ModalStoryProps> = (props) => (
  <ModalDemo {...props}>
    Модалка только с заголовком и текстом. Закрывается крестиком, по Esc или кликом по фону.
  </ModalDemo>
);
WithoutFooter.args = { title: "Информация" };
WithoutFooter.argTypes = argTypes;

export const LongContent: Story<ModalStoryProps> = (props) => (
  <ModalDemo {...props} footer={<Button onClick={props.onClose}>Понятно</Button>}>
    {Array.from({ length: 30 }, (_, i) => (
      <p key={i}>
        Абзац {i + 1}. Проверяем, что скроллится только тело модалки, а шапка и футер остаются на
        месте.
      </p>
    ))}
  </ModalDemo>
);
LongContent.args = { title: "Пользовательское соглашение" };
LongContent.argTypes = argTypes;

export const CustomWidth: Story<ModalStoryProps> = (props) => (
  <ModalDemo {...props}>
    Ширина задана пропом width и перекрывает size. На узком экране модалка всё равно ужимается
    до ширины окна.
  </ModalDemo>
);
CustomWidth.args = { title: "Своя ширина", width: 720 };
CustomWidth.argTypes = argTypes;
