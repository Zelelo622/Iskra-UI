import { useState, type ReactNode } from "react";

import { cx } from "src/utils/utils";

import type { IAvatarProps } from "./types";

import styles from "./Avatar.module.css";

export const Avatar = ({
  src,
  alt,
  fallback,
  size = "md",
  shape = "circle",
  className,
  children,
}: IAvatarProps): ReactNode => {
  const [failedSrc, setFailedSrc] = useState<string>();

  const showImage = src && failedSrc !== src;

  return (
    <span
      className={cx(styles.avatar, styles[size], styles[shape], className)}
      role="img"
      aria-label={alt}
    >
      {showImage ? (
        <img src={src} alt={alt} className={styles.image} onError={() => setFailedSrc(src)} />
      ) : (
        <span className={styles.fallback}>{fallback || alt?.charAt(0) || children}</span>
      )}
    </span>
  );
};

Avatar.displayName = "Avatar";
