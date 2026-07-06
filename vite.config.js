import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.github.io/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
});
