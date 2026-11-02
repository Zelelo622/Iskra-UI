import { useState } from "react";

import { Pagination } from "./Pagination";

import type { IPaginationProps } from "./types";
import type { ArgType, Story } from "@ladle/react";

export default {
  title: "Pagination",
};

const sizeArgType: ArgType<IPaginationProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

export const Basic: Story<IPaginationProps> = (props) => <Pagination {...props} />;
Basic.args = { totalPages: 10, size: "md", siblingCount: 1, boundaryCount: 1 };
Basic.argTypes = { size: sizeArgType };

export const Controlled: Story = () => {
  const [page, setPage] = useState(5);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Pagination totalPages={20} page={page} onChange={setPage} />
      <span>Текущая страница: {page}</span>
    </div>
  );
};

export const Many: Story = () => <Pagination totalPages={100} defaultPage={50} />;

export const Few: Story = () => <Pagination totalPages={3} />;

export const Disabled: Story = () => <Pagination totalPages={10} defaultPage={3} disabled />;
