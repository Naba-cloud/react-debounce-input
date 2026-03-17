import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactDebounceInput",
    },
    rollupOptions: {
      external: ["react"],
      output: [
        {
          format: "es",
          entryFileNames: "index.es.js",
          dir: "dist",
        },
        {
          format: "umd",
          entryFileNames: "index.umd.js",
          name: "ReactDebounceInput",
          dir: "dist",
          globals: {
            react: "React",
          },
        },
      ],
    },
  },
});
