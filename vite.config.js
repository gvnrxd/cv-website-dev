import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gvnrxd-web-vite-starter-t3/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared/components": fileURLToPath(
        new URL("./src/shared/components", import.meta.url)
      ),
      "@shared/hooks": fileURLToPath(
        new URL("./src/shared/hooks", import.meta.url)
      ),
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },
});
