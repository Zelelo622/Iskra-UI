import { Button } from "./Button";

import type { IButtonProps } from "./types";
import type { Story } from "@ladle/react";

export default {
  title: "Button",
};

export const Primary: Story<IButtonProps> = (props) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
    <Button {...props} size="sm">
      Primary
    </Button>
    <Button {...props} size="md">
      Primary
    </Button>
    <Button {...props} size="lg">
      Primary
    </Button>
  </div>
);
Primary.args = { variant: "primary", disabled: false };

export const Secondary: Story<IButtonProps> = (props) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
    <Button {...props} size="sm">
      Primary
    </Button>
    <Button {...props} size="md">
      Primary
    </Button>
    <Button {...props} size="lg">
      Primary
    </Button>
  </div>
);
Secondary.args = { variant: "secondary", disabled: false };

export const Disabled: Story<IButtonProps> = (props) => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Button {...props} variant="primary">
      Primary
    </Button>
    <Button {...props} variant="secondary">
      Secondary
    </Button>
  </div>
);
Disabled.args = { disabled: true };
