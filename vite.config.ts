import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react()],
      root: resolve(__dirname, "example"), // Set root to demo folder
      build: {
        outDir: resolve(__dirname, "dist-example"),
      },
      resolve: {
        alias: {
          "@my/scoreboard": resolve(__dirname, "lib/main.ts"), // Alias for library import
        },
      },
      test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./tests/setup.ts",
        include: ["../lib/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        exclude: ["../example"],
      },
    };
  }

  return {
    plugins: [
      react(),
      dts({ include: ["lib"], rollupTypes: true }),
      libInjectCss(),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, "lib/main.ts"),
        name: "Scoreboard",
        formats: ["es"],
        fileName: "main",
      },
      rollupOptions: {
        external: ["react", "react/jsx-runtime"],
      },
      copyPublicDir: false,
    },
  };
});
