import type { ReactNode } from "react";
import { useEffect, useId, useRef } from "react";

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
  children,
}: IModalProps): ReactNode => {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  const close = () => ref.current?.close();

  return (
    // Escape у <dialog> уже закрывает модалку с клавиатуры
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={ref}
      className={cx(styles.modal, styles[size])}
      style={{ maxWidth: toCss(width) }}
      aria-labelledby={title ? titleId : undefined}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className={styles.content}>
        {title && (
          <header className={styles.header}>
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
            <button type="button" className={styles.close} aria-label="Закрыть" onClick={close}>
              ×
            </button>
          </header>
        )}
        <div className={styles.body}>{children}</div>
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";
