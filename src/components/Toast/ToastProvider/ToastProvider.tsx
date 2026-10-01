import { createContext, ReactNode, useCallback, useMemo, useState } from "react";
import { IToastProps, Toast } from "src/components/Toast/Toast";
import { createPortal } from "react-dom";
import styles from "./ToastContainer.module.css";

export interface IToastOptions extends Pick<
  IToastProps,
  "variant" | "title" | "duration" | "closable"
> {
  description?: ReactNode;
}

interface IToastItem extends IToastOptions {
  id: string;
}

type TToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

interface IToastContextValue {
  show: (options: IToastOptions) => string;
  close: (id: string) => void;
}

export interface IToastProviderProps {
  children: ReactNode;
  position?: TToastPosition;
}

let idCounter = 0;
const nextId = () => `toast-${Date.now()}-${idCounter++}`;

export const ToastContext = createContext<IToastContextValue | null>(null);

export const ToastProvider = ({
  children,
  position = "top-right",
}: IToastProviderProps): ReactNode => {
  const [toasts, setToasts] = useState<IToastItem[]>([]);

  const close = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback((options: IToastOptions) => {
    const id = nextId();
    setToasts((prev) => [...prev, { id, ...options }]);
    return id;
  }, []);

  const value = useMemo(() => ({ show, close }), [show, close]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <div className={`${styles.container} ${styles[position]}`}>
            {toasts.map(({ id, description, ...rest }) => (
              <Toast key={id} {...rest} onClose={() => close(id)}>
                {description}
              </Toast>
            ))}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
};
