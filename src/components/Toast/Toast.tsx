import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { cx } from "src/utils/utils";

import type { IToastProps } from "./types";

import styles from "./Toast.module.css";

export const Toast = ({
  variant = "info",
  title,
  closable = true,
  duration = 5000,
  onClose,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  ...props
}: IToastProps): ReactNode => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const remainingRef = useRef(duration);
  const startedAtRef = useRef(0);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const handleClose = useCallback(() => {
    setVisible(false);
    onCloseRef.current?.();
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  const startTimer = useCallback(
    (ms: number) => {
      if (ms <= 0) return;
      startedAtRef.current = Date.now();
      timerRef.current = setTimeout(handleClose, ms);
    },
    [handleClose],
  );

  useEffect(() => {
    startTimer(remainingRef.current);
    return clearTimer;
  }, [startTimer, clearTimer]);

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    clearTimer();
    remainingRef.current -= Date.now() - startedAtRef.current;
    onMouseEnter?.(e);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    startTimer(remainingRef.current);
    onMouseLeave?.(e);
  };

  if (!visible) {
    return null;
  }

  const classes = cx(styles.toast, styles[variant], className);

  return (
    <div
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className={styles.content} role="status" aria-live="polite">
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.description}>{children}</div>}
      </div>

      {closable && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close toast"
        >
          ×
        </button>
      )}
    </div>
  );
};

Toast.displayName = "Button";
