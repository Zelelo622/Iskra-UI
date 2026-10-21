/**
 * Склеивает CSS-классы в одну строку через пробел, отбрасывая пустые значения
 * (`false`, `undefined`, `""`)
 *
 * @example
 * cx(styles.button, isActive && styles.active, className);
 * // isActive = false, className = undefined → "Button_button"
 */
export const cx = (...classes: Array<string | false | undefined>): string =>
  classes.filter(Boolean).join(" ");

/** Размер для CSS-свойства: число (в пикселях) или готовая CSS-строка. */
export type TCssSize = number | string;

/**
 * Приводит размер к значению для inline-стиля: число превращает в пиксели,
 * строку возвращает как есть, `undefined` пропускает (React тогда не выставит свойство).
 *
 * @example
 * toCss(200);     // "200px"
 * toCss("50%");   // "50%"
 * toCss();        // undefined
 */
export const toCss = (value?: TCssSize): string | undefined =>
  typeof value === "number" ? `${value}px` : value;
