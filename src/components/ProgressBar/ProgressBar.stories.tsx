import { useEffect, useId, useState, type ReactElement } from "react";

import { ProgressBar } from "./ProgressBar";

export const Default = (): ReactElement => (
  <div style={{ width: 400 }}>
    <ProgressBar value={40} aria-label="Загрузка файла" />
  </div>
);

export const Sizes = (): ReactElement => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 400 }}>
    <ProgressBar size="sm" value={30} aria-label="Маленький" />
    <ProgressBar size="md" value={50} aria-label="Средний" />
    <ProgressBar size="lg" value={70} aria-label="Большой" />
  </div>
);

export const Variants = (): ReactElement => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 400 }}>
    <ProgressBar variant="accent" value={60} aria-label="Accent" />
    <ProgressBar variant="success" value={100} aria-label="Success" />
    <ProgressBar variant="danger" value={25} aria-label="Danger" />
  </div>
);

export const Indeterminate = (): ReactElement => (
  <div style={{ width: 400 }}>
    <ProgressBar aria-label="Загрузка" />
  </div>
);

export const WithLabel = (): ReactElement => {
  const id = useId();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setValue((v) => (v >= 100 ? 0 : v + 10)), 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 400 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span id={id}>Загрузка файла</span>
        <span>{value}%</span>
      </div>
      <ProgressBar value={value} aria-labelledby={id} />
    </div>
  );
};
