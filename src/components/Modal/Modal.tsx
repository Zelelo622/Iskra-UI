import {
  useEffect,
  useId,
  useRef,
  type MouseEvent,
  type ReactNode,
  type SyntheticEvent,
} from "react";

import { cx, toCss } from "src/utils/utils";

import type { IModalProps } from "./types";

import styles from "./Modal.module.css";

export const Modal = ({
  open,
  onClose,
  title,
  footer,
  size = "md",
  width,
  closable = true,
  closeLabel = "Закрыть",
  children,
  className,
  style,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: IModalProps): ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pressedOnBackdropRef = useRef(false);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onClose();
  };

  const handleNativeClose = () => {
    if (open) {
      onClose();
    }
  };

  const handleMouseDown = (event: MouseEvent<HTMLDialogElement>) => {
    pressedOnBackdropRef.current = event.target === event.currentTarget;
  };

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (pressedOnBackdropRef.current && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    // Escape обрабатывается через onCancel, клик по подложке - дубль для мыши
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events jsx-a11y/no-noninteractive-element-interactions
    <dialog
      {...props}
      ref={dialogRef}
      className={cx(styles.modal, styles[size], className)}
      style={{ ...style, maxWidth: toCss(width) }}
      aria-labelledby={title ? titleId : ariaLabelledBy}
      onCancel={handleCancel}
      onClose={handleNativeClose}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div className={styles.content}>
        {(title || closable) && (
          <header className={styles.header}>
            {title && (
              <h2 id={titleId} className={styles.title}>
                {title}
              </h2>
            )}
            {closable && (
              <button
                type="button"
                className={styles.close}
                aria-label={closeLabel}
                onClick={onClose}
              >
                ×
              </button>
            )}
          </header>
        )}
        <div className={styles.body}>{children}</div>
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";
