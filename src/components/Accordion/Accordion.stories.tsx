import { useState } from "react";

import { Accordion } from "./Accordion";
import { AccordionContent } from "./components/AccordionContent";
import { AccordionItem } from "./components/AccordionItem";
import { AccordionTrigger } from "./components/AccordionTrigger";

import type { IAccordionProps } from "./types";
import type { Story } from "@ladle/react";

export default {
  title: "Accordion",
};

export const Basic: Story<IAccordionProps> = (props) => (
  <div style={{ padding: "2rem", maxWidth: "600px" }}>
    <Accordion {...props} type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Что такое UI-кит?</AccordionTrigger>
        <AccordionContent>
          <p>
            Это библиотека переиспользуемых компонентов, которая помогает разработчикам быстрее
            создавать интерфейсы, соблюдая единый дизайн.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Зачем нужен Compound Components паттерн?</AccordionTrigger>
        <AccordionContent>
          <p>
            Он дает максимальную гибкость. Пользователь библиотеки может сам решать, как расположить
            элементы внутри, какие добавить иконки и стили.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Как работает анимация?</AccordionTrigger>
        <AccordionContent>
          <p>
            Мы используем CSS Grid (0fr → 1fr), что позволяет анимировать высоту от 0 до auto без
            использования JavaScript.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
Basic.args = {
  disabled: false,
};

export const Multiple: Story = () => (
  <div style={{ padding: "2rem", maxWidth: "600px" }}>
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Первый вопрос</AccordionTrigger>
        <AccordionContent>
          <p>Можно открыть несколько элементов одновременно.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Второй вопрос</AccordionTrigger>
        <AccordionContent>
          <p>Этот режим удобен для FAQ, настроек и документации.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Третий вопрос</AccordionTrigger>
        <AccordionContent>
          <p>Попробуйте открыть все три - они будут открыты одновременно.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const DefaultOpen: Story = () => (
  <div style={{ padding: "2rem", maxWidth: "600px" }}>
    <Accordion type="single" defaultValue={["item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Закрыт по умолчанию</AccordionTrigger>
        <AccordionContent>
          <p>Этот элемент закрыт.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Открыт по умолчанию</AccordionTrigger>
        <AccordionContent>
          <p>Этот элемент открыт сразу при монтировании, благодаря defaultValue.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const Disabled: Story = () => (
  <div style={{ padding: "2rem", maxWidth: "600px" }}>
    <Accordion type="single" disabled>
      <AccordionItem value="item-1">
        <AccordionTrigger>Нельзя открыть</AccordionTrigger>
        <AccordionContent>
          <p>Весь аккордеон заблокирован.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Тоже нельзя</AccordionTrigger>
        <AccordionContent>
          <p>Кнопки недоступны для клика и с клавиатуры.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const ItemDisabled: Story = () => (
  <div style={{ padding: "2rem", maxWidth: "600px" }}>
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Доступен</AccordionTrigger>
        <AccordionContent>
          <p>С этим элементом всё в порядке.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Заблокирован</AccordionTrigger>
        <AccordionContent>
          <p>Этот элемент disabled на уровне Item.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Тоже доступен</AccordionTrigger>
        <AccordionContent>
          <p>Можно открывать по клику.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const Controlled: Story = () => {
  const [value, setValue] = useState<string[]>(["item-1"]);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ fontSize: 14, color: "#6b7280" }}>
        Открыто: <strong>{value.length ? value.join(", ") : "ничего"}</strong>
      </div>

      <Accordion type="multiple" value={value} onValueChange={setValue}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Первый</AccordionTrigger>
          <AccordionContent>
            <p>Управляется внешним состоянием.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Второй</AccordionTrigger>
          <AccordionContent>
            <p>Стейт хранится в родительском компоненте.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Третий</AccordionTrigger>
          <AccordionContent>
            <p>Кнопки внизу синхронизированы с аккордеоном.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={() => setValue(["item-1", "item-2"])}>Открыть 1 и 2</button>
        <button onClick={() => setValue(["item-3"])}>Открыть только 3</button>
        <button onClick={() => setValue([])}>Закрыть все</button>
      </div>
    </div>
  );
};

export const RichContent: Story = () => (
  <div style={{ padding: "2rem", maxWidth: "600px" }}>
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Как установить пакет?</AccordionTrigger>
        <AccordionContent>
          <p>Выполните в терминале:</p>
          <pre
            style={{
              background: "#1f2937",
              color: "#e5e7eb",
              padding: "12px",
              borderRadius: "6px",
              overflowX: "auto",
            }}
          >
            <code>npm install @my/ui-kit</code>
          </pre>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Список возможностей</AccordionTrigger>
        <AccordionContent>
          <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
            <li>Поддержка single / multiple</li>
            <li>Controlled и uncontrolled режимы</li>
            <li>Доступность (a11y) из коробки</li>
            <li>Анимация без JS</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
