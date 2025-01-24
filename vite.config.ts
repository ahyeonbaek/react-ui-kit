import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.node.json",
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@ui",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@consts",
        replacement: path.resolve(__dirname, "src/consts"),
      },
    ],
  },
  build: {
    lib: {
      // entry: path.resolve(__dirname, "src/components/index.ts"),
      entry: "./src/components/index.ts",
      name: "index",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
});
