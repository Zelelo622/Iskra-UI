export const cx = (...classes: Array<string | false | undefined>): string =>
  classes.filter(Boolean).join(" ");

export type TCssSize = number | string;

export const toCss = (value?: TCssSize): string | undefined =>
  typeof value === "number" ? `${value}px` : value;
