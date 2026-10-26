import { readdirSync } from "node:fs";

const components = readdirSync(new URL("./src/components", import.meta.url), {
  withFileTypes: true,
})
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name.toLowerCase());

const projectScopes = ["tokens", "utils", "deps", "build", "lint", "ci", "docs", "release"];

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", [...components, ...projectScopes]],
    "subject-case": [2, "never", ["upper-case"]],
  },
};
