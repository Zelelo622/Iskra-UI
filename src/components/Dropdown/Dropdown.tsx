import { cloneElement, useRef, useState, type ReactNode } from "react";

import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from "@floating-ui/react";

import { Divider } from "src/components/Divider/Divider";
import { cx } from "src/utils/utils";

import type { IDropdownProps } from "./types";

import styles from "./Dropdown.module.css";

export const Dropdown = ({
  items,
  trigger,
  placement = "bottom-start",
  open,
  defaultOpen = false,
  onOpenChange,
  className,
  ...props
}: IDropdownProps): ReactNode => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (next: boolean) => {
    if (!isControlled) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  };

  const listRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const {
    refs,
    floatingStyles,
    context,
    placement: finalPlacement,
    isPositioned,
  } = useFloating({
    open: isOpen,
    onOpenChange: handleOpenChange,
    placement,
    whileElementsMounted: autoUpdate,
    transform: false,
    middleware: [offset(4), flip(), shift({ padding: 8 })],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "menu" });
  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: isOpen ? setActiveIndex : undefined,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    dismiss,
    role,
    listNavigation,
    typeahead,
  ]);

  const triggerRef = (trigger.props as any)?.ref ?? (trigger as any).ref;

  // oxlint-disable-next-line react/refs
  const mergedRef = useMergeRefs([refs.setReference, triggerRef]);

  const triggerElement = cloneElement(
    trigger,
    getReferenceProps({
      ...(trigger.props as object),
      ref: mergedRef,
    }),
  );

  return (
    <>
      {triggerElement}
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              // oxlint-disable-next-line react/refs
              ref={refs.setFloating}
              style={floatingStyles}
              data-placement={finalPlacement}
              data-pending={isPositioned ? undefined : ""}
              className={cx(styles.dropdown, className)}
              {...getFloatingProps(props)}
            >
              {items.map((item, index) => {
                if (item.type === "divider") {
                  return <Divider key={index} className={styles.divider} />;
                }

                const isActive = activeIndex === index;

                return (
                  <button
                    key={index}
                    ref={(node) => {
                      listRef.current[index] = node;
                      labelsRef.current[index] = item.disabled ? null : item.label;
                    }}
                    type="button"
                    role="menuitem"
                    disabled={item.disabled}
                    tabIndex={isActive ? 0 : -1}
                    data-active={isActive ? "" : undefined}
                    className={cx(styles.item, item.danger && styles.danger)}
                    {...getItemProps({
                      onClick() {
                        item.onSelect();
                        handleOpenChange(false);
                      },
                    })}
                  >
                    {item.icon && (
                      <span className={styles.icon} aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    <span className={styles.label}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
};

Dropdown.displayName = "Dropdown";
