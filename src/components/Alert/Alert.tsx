import { HTMLAttributes, ReactNode, useState } from "react";
import styles from "./Alert.module.css";

export interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  closable?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

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

  const variantClass = styles[variant];
  const classes = [styles.alert, variantClass, className].filter(Boolean).join(" ");

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
