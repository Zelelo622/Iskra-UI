# Iskra UI

Доступная (a11y) и легковесная библиотека React-компонентов на TypeScript.

[Демо компонентов](https://zelelo622.github.io/Iskra-UI/) · [npm](https://www.npmjs.com/package/@zelelo/iskra-ui) · [История изменений](https://github.com/Zelelo622/Iskra-UI/blob/main/CHANGELOG.md)

## Установка

```bash
npm install @zelelo/iskra-ui
```

Нужен React 18 или новее (`react` и `react-dom` - peer dependencies).

Поддерживаемые браузеры: Chrome 123+, Edge 123+, Firefox 120+, Safari 17.5+ - стили используют CSS-функцию `light-dark()`.

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
| Оверлеи        | Modal, Drawer, Tooltip, Toast, Dropdown                                             |
| Обратная связь | Alert, ProgressBar, Spinner, Skeleton                                               |
| Отображение    | Avatar, Badge, Tag                                                                       |
| Разметка       | Divider                                                                             |

## Тёмная тема

Тема задаётся атрибутом `data-theme` на любом родительском элементе, обычно на `<html>`:

| Значение     | Тема                                  |
| :----------- | :------------------------------------ |
| без атрибута | светлая                               |
| `"light"`    | светлая                               |
| `"dark"`     | тёмная                                |
| `"auto"`     | как в настройках операционной системы |

```html
<html data-theme="auto"></html>
```

Переключать тему - значит менять этот атрибут, например `document.documentElement.dataset.theme = "dark"`. Атрибут можно поставить и на часть страницы: всё внутри элемента возьмёт его тему.

Вместе с темой меняется и `color-scheme`, поэтому скроллбары, автозаполнение и нативные элементы браузера тоже становятся тёмными.

## Настройка внешнего вида

Цвета, радиусы, размеры шрифтов и другие значения заданы CSS-переменными с префиксом `--uikit-`. Чтобы изменить их, переопределите переменные в своём CSS, подключённом **после** `styles.css`.

Цвет задавайте сразу для обеих тем через `light-dark(светлая, тёмная)` - так он будет правильным при любом значении `data-theme`, включая `"auto"`:

```css
:root {
  --uikit-color-accent: light-dark(#7c3aed, #a78bfa);
  --uikit-color-accent-hover: light-dark(#6d28d9, #c4b5fd);
  --uikit-radius-md: 4px;
}
```

Кольцо фокуса считается из акцентного цвета само, его переопределять не нужно.

Полный список переменных:

- [colors.css](https://github.com/Zelelo622/Iskra-UI/blob/main/src/styles/colors.css) - цвета: фоны, текст, границы, акцент, статусы, тени;
- [foundation.css](https://github.com/Zelelo622/Iskra-UI/blob/main/src/styles/foundation.css) - скругления, шрифты, высота полей и кнопок, тени, слои.

## Участие в разработке

Как запустить проект, правила коммитов и веток - в [CONTRIBUTING.md](https://github.com/Zelelo622/Iskra-UI/blob/main/CONTRIBUTING.md).

## Лицензия

MIT © Zelelo622
