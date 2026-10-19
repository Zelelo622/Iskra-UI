export const SPINNER_VARIANTS = {
  circle: { items: 0 },
  dots: { items: 3 },
  spiral: { items: 5 },
  propagate: { items: 6 },
} as const satisfies Record<string, { items: number }>;