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
        name: "MyLib",
        formats: ["es"],
        fileName: "my-lib",
      },
      rollupOptions: {
        external: ["react", "react/jsx-runtime"],
      },
      copyPublicDir: false,
    },
  };
});
