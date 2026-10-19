import { ReactNode } from "react";
import { TCssSize } from "src/utils/utils";

export interface IModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  width?: TCssSize;
}