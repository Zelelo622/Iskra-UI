import { Avatar } from "./Avatar";

import type { IAvatarProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Avatar",
};

const sizeArgType: ArgType<IAvatarProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

const shapeArgType: ArgType<IAvatarProps["shape"]> = {
  options: ["circle", "square"],
  control: { type: "radio" },
};

export const Basic: Story<IAvatarProps> = (props) => (
  <Avatar
    {...props}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwd0nPzrYJLXxd_3BdchWPf2TbB9LYCVeNiMr54VscKGR_g9obfNFMxCw&s=10"
    alt="Изображен Гатс - персонаж манги Берсерк"
    fallback="Гатс"
  />
);
Basic.args = { size: "md", shape: "circle" };
Basic.argTypes = { size: sizeArgType, shape: shapeArgType };

export const WithFallback: Story = () => (
  <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
    <div style={{ display: "flex", gap: "1rem" }}>
      <Avatar fallback="ИИ" size="lg" />
      <Avatar fallback="АП" />
      <Avatar fallback="М" size="sm" />
    </div>
    <div style={{ display: "flex", gap: "1rem" }}>
      <Avatar fallback="ИИ" size="lg" shape="square" />
      <Avatar fallback="АП" shape="square" />
      <Avatar fallback="М" size="sm" shape="square" />
    </div>
  </div>
);

export const BrokenImage: Story = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Avatar src="https://broken-link.com/image.jpg" fallback="ОШ" alt="Ошибка" />
  </div>
);
