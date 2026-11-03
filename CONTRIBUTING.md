# Разработка Iskra UI

## Быстрый старт

Версия Node.js зафиксирована в `.nvmrc`:

```bash
nvm use        # переключиться на нужную версию Node
npm install    # зависимости + git-хуки (ставятся автоматически через lefthook)
npm run dev    # Ladle - витрина компонентов
```

После `npm install` в `.git/hooks` должны появиться `pre-commit`, `commit-msg` и `pre-push`. Если их нет - выполните `npx lefthook install`.

Все файлы хранятся с переводами строк LF (см. `.gitattributes`), на Windows в git ничего настраивать не нужно.

## Команды

| Команда                 | Что делает                                                      |
| :---------------------- | :-------------------------------------------------------------- |
| `npm run dev`           | Ladle - витрина компонентов для разработки                      |
| `npm run build`         | Сборка библиотеки в `dist` (ESM + CJS + типы + `index.css`)     |
| `npm run ladle:build`   | Сборка витрины в `build`                                        |
| `npm run ladle:preview` | Просмотр собранной витрины                                      |
| `npm test`              | Тесты (vitest)                                                  |
| `npm run lint`          | oxlint + ESLint                                                 |
| `npm run format`        | Форматирование oxfmt                                            |
| `npm run typecheck`     | Проверка типов TypeScript                                       |
| `npm run check`         | Всё сразу: lint, format:check, typecheck, build                 |
| `npm run check:fix`     | Исправить всё, что исправляется автоматически, и прогнать check |

## Git-flow

Одна задача - одна ветка - один PR. Ветка `main` защищена: прямой пуш запрещён, код попадает туда только через PR с зелёными проверками.

### Ветки

Формат: `<тип>/<что-делаем>` - латиницей, в нижнем регистре, слова через дефис.

| Тип         | Для чего                              | Пример                     |
| :---------- | :------------------------------------ | :------------------------- |
| `feature/`  | Новый компонент или возможность       | `feature/date-picker`      |
| `fix/`      | Исправление бага                      | `fix/modal-close-button`   |
| `refactor/` | Переписан код без изменения поведения | `refactor/use-dialog-hook` |
| `docs/`     | README, CONTRIBUTING, сторис, JSDoc   | `docs/theming`             |
| `ci/`       | GitHub Actions                        | `ci/run-tests`             |
| `build/`    | Сборка, зависимости, `package.json`   | `build/update-tsup`        |
| `chore/`    | Прочее: конфиги линтеров, хуки        | `chore/oxlint-rules`       |

Тип ветки совпадает с типом будущего коммита (кроме `feature/` → `feat`).

## Коммиты

`CHANGELOG.md`, версия и релизы генерируются автоматически из коммитов в `main` ([release-please](https://github.com/googleapis/release-please)). Тип коммита решает, попадёт ли изменение в CHANGELOG и какая выйдет версия.

### Формат

```
<тип>(<область>): <описание>
```

- **тип** - из таблицы ниже;
- **область** - имя папки компонента в нижнем регистре (`button`, `checkboxgroup`, ...) или одна из: `tokens`, `utils`, `deps`, `build`, `lint`, `ci`, `docs`, `release`. Новый компонент становится областью автоматически, как только появляется его папка в `src/components`. Область необязательна;
- **описание** - по-русски, с маленькой буквы, без точки, как результат: «добавлено…», «исправлено…». Пишите, **что изменилось для пользователя**, а не что делали в коде.

| Тип        | Когда                                        | В CHANGELOG          | Версия |
| :--------- | :------------------------------------------- | :------------------- | :----- |
| `feat`     | Новый компонент, проп, вариант               | «Новые возможности»  | minor  |
| `fix`      | Исправление бага, который видит пользователь | «Исправления»        | patch  |
| `perf`     | Ускорение без изменения поведения            | «Производительность» | patch  |
| `revert`   | Откат коммита                                | «Откаты»             | patch  |
| `docs`     | README, JSDoc, сторис                        | нет                  | -      |
| `style`    | Форматирование                               | нет                  | -      |
| `refactor` | Переписан код без изменения поведения        | нет                  | -      |
| `test`     | Тесты                                        | нет                  | -      |
| `build`    | Сборка, tsup, `package.json`, зависимости    | нет                  | -      |
| `ci`       | GitHub Actions                               | нет                  | -      |
| `chore`    | Прочее: конфиги линтеров, хуки               | нет                  | -      |

Примеры:

```
feat(checkbox): добавлено состояние indeterminate
fix(modal): крестик показывается без заголовка
build(deps): обновлён tsup до 8.3
docs: добавлен раздел про тёмную тему
```

### Ломающие изменения

Если пользователям придётся менять свой код (переименован или удалён проп, изменилось поведение по умолчанию) - `!` после типа и инструкция в теле коммита (при Squash and Merge - в описании PR):

```
feat(button)!: проп variant="outline" переименован в "secondary"

BREAKING CHANGE: замените variant="outline" на variant="secondary".
```

Пока версия ниже 1.0.0, ломающее изменение повышает minor (`0.4.0 → 0.5.0`), после 1.0.0 - major.

## Git-хуки (lefthook)

- **pre-commit** - oxlint и ESLint по изменённым файлам, oxfmt форматирует и добавляет исправления в коммит.
- **commit-msg** - commitlint проверяет сообщение коммита.
- **pre-push** - проверка типов и сборка.

Пропустить хуки для черновика: `git commit --no-verify` / `git push --no-verify`. CI на GitHub всё равно всё проверит.

## Релизы

1. После каждого слияния в `main` release-please открывает или обновляет PR `chore: release X.Y.Z` с новой версией и CHANGELOG.
2. Чтобы выпустить версию - слить этот PR (CHANGELOG в нём можно поправить руками).
3. После слияния автоматически создаются тег, GitHub Release и публикация в npm.

Версию в `package.json` и `CHANGELOG.md` руками не менять - их ведёт release-please.

## CI

| Workflow       | Когда                   | Что делает                                                      |
| :------------- | :---------------------- | :-------------------------------------------------------------- |
| `ci.yml`       | PR и пуш в `main`       | lint, format:check, typecheck, build, сборка Ladle              |
| `pr-title.yml` | Открытие и изменение PR | Проверяет заголовок PR правилами commitlint                     |
| `release.yml`  | Пуш в `main`            | Ведёт релизный PR; после его слияния - тег, GitHub Release, npm |
| `ladle.yml`    | Пуш в `main`            | Публикует витрину на GitHub Pages                               |

## Настройка репозитория

Делается один раз, нужна только владельцу репозитория.

- **Secret `RELEASE_PLEASE_TOKEN`** - fine-grained personal access token на этот репозиторий (Contents, Pull requests, Issues: Read and write). Без него релизный PR не запускает CI.
- **npm → пакет → Settings → Trusted Publisher** - GitHub Actions, репозиторий `Zelelo622/Iskra-UI`, workflow `release.yml`. Публикация идёт через OIDC, npm-токен не нужен.
- **Settings → Pages → Source:** GitHub Actions.
- **Settings → General → Pull Requests:** включён только Squash merging, «Default to pull request title», автоудаление веток после слияния.
- **Settings → Branches:** защита `main` - только через PR, обязательные проверки CI и PR title.
