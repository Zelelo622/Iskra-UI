# Iskra UI

Доступная (a11y) и легковесная библиотека React-компонентов на TypeScript.

[Демо компонентов](https://zelelo622.github.io/Iskra-UI/) · [npm](https://www.npmjs.com/package/@zelelo/iskra-ui) · [История изменений](https://github.com/Zelelo622/Iskra-UI/blob/main/CHANGELOG.md)

## Установка

```bash
npm install @zelelo/iskra-ui
```

Нужен React 18 или новее (`react` и `react-dom` - peer dependencies).

## Использование

Стили поставляются отдельным файлом - подключите его один раз в корне приложения:

```tsx
import { Button, Input } from "@zelelo/iskra-ui";
import "@zelelo/iskra-ui/styles.css";

function App() {
  return (
    <form>
      <Input label="Имя" placeholder="Введите имя..." />
      <Button type="submit">Отправить</Button>
    </form>
  );
}
```

Типы TypeScript входят в пакет. Пропсы каждого компонента экспортируются вместе с ним:

```ts
import type { IButtonProps } from "@zelelo/iskra-ui";
```

## Компоненты

Все компоненты с примерами - в [демо](https://zelelo622.github.io/Iskra-UI/).

| Группа         | Компоненты                                                                          |
| :------------- | :---------------------------------------------------------------------------------- |
| Формы          | Button, Input, Textarea, Select, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch |
| Навигация      | Tabs, Pagination, Accordion                                                         |
| Оверлеи        | Modal, Drawer, Tooltip, Toast                                                       |
| Обратная связь | Alert, ProgressBar, Spinner, Skeleton                                               |
| Отображение    | Avatar, Badge                                                                       |
| Разметка       | Divider                                                                             |

## Тёмная тема

Тёмная тема включается атрибутом `data-theme="dark"` на любом родительском элементе, обычно на `<html>`:

```html
<html data-theme="dark"></html>
```

Переключать тему - значит менять этот атрибут, например `document.documentElement.dataset.theme = "dark"`.

## Настройка внешнего вида

Цвета, радиусы, размеры шрифтов и другие значения заданы CSS-переменными с префиксом `--uikit-`. Чтобы изменить их, переопределите переменные в своём CSS, подключённом **после** `styles.css`:

```css
:root {
  --uikit-color-accent: #7c3aed;
  --uikit-color-accent-hover: #6d28d9;
  --uikit-radius-md: 4px;
}

[data-theme="dark"] {
  --uikit-color-accent: #a78bfa;
}
```

Полный список переменных - в [tokens.css](https://github.com/Zelelo622/Iskra-UI/blob/main/src/styles/tokens.css).

## Участие в разработке

Как запустить проект, правила коммитов и веток - в [CONTRIBUTING.md](https://github.com/Zelelo622/Iskra-UI/blob/main/CONTRIBUTING.md).

## Лицензия

MIT © Zelelo622
