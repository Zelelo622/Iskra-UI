import { ReactNode, useState } from "react";
import { cx } from "src/utils/utils";
import type { IAlertProps } from "./types";

import styles from "./Alert.module.css";

export const Alert = ({
  variant = "info",
  title,
  closable = false,
  onClose,
  children,
  className,
  ...props
}: IAlertProps): ReactNode => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  const classes = cx(styles.alert, styles[variant], className);

  return (
    <div className={classes} role="alert" {...props}>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {title && <div className={styles.description}>{children}</div>}
      </div>

      {closable && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};

Alert.displayName = "Alert";
