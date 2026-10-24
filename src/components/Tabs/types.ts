import type { ReactNode } from "react";

export interface ITabItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface ITabsProps {
  items: ITabItem[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}
