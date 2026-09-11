import { Story } from "@ladle/react";
import { Toast, IToastProps } from "./Toast";
import { useToast } from "./ToastProvider/hook/useToast";
import { ToastProvider } from "./ToastProvider/ToastProvider";
import { Button } from "../Button/Button";

export default {
  title: "Toast",
};

export const ToastVariants: Story<IToastProps> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 400 }}>
    <Toast variant="info" title="Информация" duration={0}>
      Данные нужно заполнить все.
    </Toast>
    <Toast variant="success" title="Успешно" duration={0}>
      Данные отправлены.
    </Toast>
    <Toast variant="warning" title="Предупреждение" duration={0}>
      Некоторые поля остались пустые.
    </Toast>
    <Toast variant="error" title="Ошибка" duration={0}>
      Обязательные поля не заполнены.
    </Toast>
  </div>
);

const ImperativeDemo = () => {
  const toast = useToast();

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast.info({ title: "Информация", description: "Так себе новость." })}
      >
        Info
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast.success({ title: "Успешно", description: "Данные сохранены." })}
      >
        Success
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast.warning({ title: "Предупреждение", description: "Проверьте поля." })}
      >
        Warning
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast.error({ title: "Ошибка", description: "Не удалось сохранить." })}
      >
        Error
      </Button>
    </div>
  );
};

export const ToastImperative: Story = () => (
  <ToastProvider position="top-right">
    <ImperativeDemo />
  </ToastProvider>
);
