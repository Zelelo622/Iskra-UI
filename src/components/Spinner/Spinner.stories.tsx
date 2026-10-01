import type { ArgType, Story } from "@ladle/react";
import { Spinner, ISpinnerProps } from "./Spinner";

export default {
  title: "Spinner",
};

const sizeArgType: ArgType<ISpinnerProps["size"]> = {
  options: ["sm", "md", "lg"],
  control: { type: "radio" },
};

export const Circle: Story<ISpinnerProps> = (props) => <Spinner {...props} variant="circle" />;
Circle.args = { size: "md" };
Circle.argTypes = { size: sizeArgType };

export const Dots: Story<ISpinnerProps> = (props) => <Spinner {...props} variant="dots" />;
Dots.args = { size: "md" };
Dots.argTypes = { size: sizeArgType };

export const Spiral: Story<ISpinnerProps> = (props) => <Spinner {...props} variant="spiral" />;
Spiral.args = { size: "md" };
Spiral.argTypes = { size: sizeArgType };

export const Propagate: Story<ISpinnerProps> = (props) => <Spinner {...props} variant="propagate" />;
Propagate.args = { size: "md" };
Propagate.argTypes = { size: sizeArgType };
