import { useContext } from "react";
import { IToastOptions, ToastContext } from "../ToastProvider";
import { TToastVariant } from "../../Toast";

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast использован вне ToastProvider");
  }

  const make =
    (variant: TToastVariant) =>
    (options: Omit<IToastOptions, "variant"> = {}) =>
      ctx.show({ variant, ...options });

  return {
    show: ctx.show,
    close: ctx.close,
    info: make("info"),
    success: make("success"),
    warning: make("warning"),
    error: make("error"),
  };
};
