import { Alert } from "./Alert";

import type { IAlertProps } from "./types";
import type { Story } from "@ladle/react";

export default {
  title: "Alert",
};

export const AlertInfo: Story<IAlertProps> = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Alert {...props}>Данные нужно заполнить все.</Alert>
    <Alert closable onClose={() => console.info("Закрыт Alert info")} {...props}>
      Этот алерт можно закрыть.
    </Alert>
  </div>
);
AlertInfo.args = { variant: "info", title: "Информация" };

export const AlertSuccess: Story<IAlertProps> = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Alert {...props}>Данные отправлены.</Alert>
    <Alert closable onClose={() => console.info("Закрыт Alert success")} {...props}>
      Этот алерт можно закрыть.
    </Alert>
  </div>
);
AlertSuccess.args = { variant: "success", title: "Успешно" };

export const AlertWarning: Story<IAlertProps> = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Alert {...props}>Некоторые поля остались пустые.</Alert>
    <Alert closable onClose={() => console.info("Закрыт Alert warning")} {...props}>
      Этот алерт можно закрыть.
    </Alert>
  </div>
);
AlertWarning.args = { variant: "warning", title: "Предупреждение" };

export const AlertError: Story<IAlertProps> = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Alert {...props}>Обязательные поля не заполнены.</Alert>
    <Alert closable onClose={() => console.info("Закрыт Alert error")} {...props}>
      Этот алерт можно закрыть.
    </Alert>
  </div>
);
AlertError.args = { variant: "error", title: "Ошибка" };
