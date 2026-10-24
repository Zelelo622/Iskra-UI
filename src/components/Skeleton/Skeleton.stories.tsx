import { Button } from "src/components/Button/Button";

import { Skeleton } from "./Skeleton";

import type { ISkeletonProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Skeleton",
};

const animationArgType: ArgType<ISkeletonProps["animation"]> = {
  options: ["pulse", "wave"],
  control: { type: "radio" },
};

export const Variants: Story<ISkeletonProps> = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 320 }}>
    <Skeleton {...props} variant="text" />
    <Skeleton {...props} variant="rect" height={120} />
    <Skeleton {...props} variant="circle" width={48} />
  </div>
);
Variants.args = { animation: "pulse" };
Variants.argTypes = { animation: animationArgType };

export const Lines: Story<ISkeletonProps> = (props) => <Skeleton {...props} />;
Lines.args = { lines: 3, width: 320, animation: "pulse" };
Lines.argTypes = { animation: animationArgType };

export const SizedByChildren: Story<ISkeletonProps> = (props) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
    <Skeleton {...props} variant="rect">
      <Button size="sm">Маленькая</Button>
    </Skeleton>
    <Skeleton {...props} variant="rect">
      <Button size="lg">Большая кнопка</Button>
    </Skeleton>
  </div>
);
SizedByChildren.args = { animation: "pulse", radius: 6 };
SizedByChildren.argTypes = { animation: animationArgType };

export const Card: Story<ISkeletonProps> = ({ loading, animation }) => (
  <div aria-busy={loading} style={{ display: "flex", gap: "1rem", maxWidth: 360, padding: "1rem" }}>
    <Skeleton variant="circle" width={48} loading={loading} animation={animation}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#2563eb",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        ИИ
      </div>
    </Skeleton>
    <div style={{ flex: 1 }}>
      <Skeleton lines={3} loading={loading} animation={animation}>
        <p style={{ margin: 0 }}>
          Иван Иванов оставил комментарий к задаче. Скелетон заменяется настоящим контентом, когда
          loading становится false.
        </p>
      </Skeleton>
    </div>
  </div>
);
Card.args = { loading: true, animation: "pulse" };
Card.argTypes = { animation: animationArgType };
