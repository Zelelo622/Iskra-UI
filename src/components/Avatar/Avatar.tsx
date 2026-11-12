import { useState, type ReactNode } from "react";

import { cx } from "src/utils/utils";

import type { IAvatarProps } from "./types";

import styles from "./Avatar.module.css";

const firstChar = (text?: string): string | undefined => Array.from(text?.trim() ?? "")[0];

export const Avatar = ({
  src,
  alt,
  fallback,
  size = "md",
  shape = "circle",
  className,
  children,
  ...props
}: IAvatarProps): ReactNode => {
  const [failedSrc, setFailedSrc] = useState<string>();

  const showImage = src && failedSrc !== src;

  return (
    <span
      {...props}
      className={cx(styles.avatar, styles[size], styles[shape], className)}
      role={alt ? "img" : undefined}
      aria-label={alt}
    >
      {showImage ? (
        <img src={src} alt={alt ?? ""} className={styles.image} onError={() => setFailedSrc(src)} />
      ) : (
        <span className={styles.fallback} aria-hidden={alt ? true : undefined}>
          {fallback || firstChar(alt) || children}
        </span>
      )}
    </span>
  );
};

Avatar.displayName = "Avatar";
