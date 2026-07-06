import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: ".", // Drops production files into your root folder instead of /dist
    emptyOutDir: false, // Prevents Vite from deleting your source code
  },
});
