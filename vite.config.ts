import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
    biomePlugin({
      mode: "check",
      files: ".",
      applyFixes: true,
    }),
    tsconfigPaths(), // tsconfig-paths 플러그인 등록
  ],
});
