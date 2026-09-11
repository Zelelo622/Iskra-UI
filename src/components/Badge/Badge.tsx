import { HTMLAttributes } from "react";
import styles from "./Badge.module.css";

export interface IBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  color?: "red" | "green" | "blue";
  count?: number;
  max?: number;
  /**
   * Доступное описание, озвучиваемое программами чтения с экрана (например, «3 непрочитанных
   * сообщения», «Онлайн»). Необходимо для того, чтобы точечный вариант мог передавать информацию
   * вспомогательным технологиям, поскольку в нем нет собственного видимого текста.
   */
  label?: string;
}

const formatCount = (count: number, max: number): string => {
  if (count > max) {
    return `${max}+`;
  }
  return String(count);
};

export const Badge = ({
  color = "blue",
  max = 999,
  count,
  label,
  className,
  ...props
}: IBadgeProps): JSX.Element => {
  const isDot = count === undefined;
  const colorClass = styles[color];
  const classes = [styles.badge, isDot ? styles.dot : styles.count, colorClass, className]
    .filter(Boolean)
    .join(" ");

  const role = isDot ? (label ? "img" : undefined) : "status";
  const ariaHidden = isDot && !label ? true : undefined;

  return (
    <span className={classes} role={role} aria-hidden={ariaHidden} aria-label={label} {...props}>
      {isDot ? null : formatCount(count, max)}
    </span>
  );
};

Badge.displayName = "Badge";
