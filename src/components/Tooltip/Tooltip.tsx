import type { ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement, useState } from "react";

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
} from "@floating-ui/react";

import { cx } from "src/utils/utils";

import type { ITooltipProps } from "./types";

import styles from "./Tooltip.module.css";

export const Tooltip = ({
  content,
  children,
  placement = "top",
  delay = 200,
  className,
  ...props
}: ITooltipProps): ReactNode => {
  const [open, setOpen] = useState(false);

  const {
    refs,
    floatingStyles,
    context,
    placement: finalPlacement,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  });

  const hover = useHover(context, { delay: { open: delay, close: 0 } });
  const focus = useFocus(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, role]);

  const childRef = isValidElement(children)
    ? ((children as any).props?.ref ?? (children as any).ref)
    : null;
  const mergedRef = useMergeRefs([refs.setReference, childRef]);

  const child = isValidElement(children) ? (
    cloneElement(
      children as ReactElement<any>,
      getReferenceProps({
        ...(children as ReactElement<any>).props,
        ref: mergedRef,
      }),
    )
  ) : (
    <span ref={refs.setReference} {...getReferenceProps()}>
      {children}
    </span>
  );

  return (
    <>
      {child}
      {open && (
        <div
          // oxlint-disable-next-line react/refs
          ref={refs.setFloating}
          style={floatingStyles}
          data-placement={finalPlacement}
          className={cx(styles.tooltip, className)}
          {...getFloatingProps(props)}
        >
          {content}
          <div className={styles.arrow} />
        </div>
      )}
    </>
  );
};
