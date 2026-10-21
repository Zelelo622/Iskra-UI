import type { Story } from "@ladle/react";
import { Tabs } from "./Tabs";
import type { ITabsProps } from "./types";

export default {
  title: "Tabs",
};

export const Standart: Story<ITabsProps> = () => (
  <Tabs
    defaultValue="profile"
    items={[
      { value: "profile", label: "Профиль", content: <p>Настройки профиля</p> },
      { value: "security", label: "Безопасность", content: <p>Пароль и 2FA</p> },
      { value: "billing", label: "Оплата", content: <p>Тарифы</p>, disabled: true },
    ]}
  />
);
Standart.args = {};
Standart.argTypes = {};
