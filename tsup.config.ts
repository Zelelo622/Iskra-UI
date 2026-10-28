import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  injectStyle: false,
  // tsup routes every .css file through its own postcss plugin, which only reads
  // loader[".css"] and ignores ".module.css". All CSS is loaded as CSS Modules here,
  // so a stylesheet with global class names would need :global(...).
  loader: {
    ".css": "local-css",
  },
});
