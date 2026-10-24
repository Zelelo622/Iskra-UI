import type { KeyboardEvent, ReactNode } from "react";
import { useId, useRef, useState } from "react";

import { cx } from "src/utils/utils";

import type { ITabsProps } from "./types";

import styles from "./Tabs.module.css";

export const Tabs = ({ items, defaultValue, onChange, className }: ITabsProps): ReactNode => {
  const [active, setActive] = useState(() => {
    const isSelectable = items.some((item) => item.value === defaultValue && !item.disabled);
    return isSelectable ? defaultValue : items.find((item) => !item.disabled)?.value;
  });
  const id = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = items.findIndex((item) => item.value === active);

  const select = (value: string) => {
    if (value === active) return;
    setActive(value);
    onChange?.(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const enabled = items.flatMap((item, i) => (item.disabled ? [] : [i]));
    const position = enabled.indexOf(index);

    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = enabled[(position + 1) % enabled.length];
        break;
      case "ArrowLeft":
        next = enabled[(position - 1 + enabled.length) % enabled.length];
        break;
      case "Home":
        next = enabled[0];
        break;
      case "End":
        next = enabled[enabled.length - 1];
        break;
      default:
        return;
    }

    event.preventDefault();
    tabRefs.current[next]?.focus();
    select(items[next].value);
  };

  return (
    <div className={cx(styles.tabs, className)}>
      <div role="tablist" className={styles.list}>
        {items.map((item, index) => {
          const selected = index === activeIndex;

          return (
            <button
              key={item.value}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              className={styles.tab}
              onClick={() => select(item.value)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={activeIndex >= 0 ? `${id}-tab-${activeIndex}` : undefined}
        tabIndex={0}
        className={styles.panel}
      >
        {items[activeIndex]?.content}
      </div>
    </div>
  );
};
