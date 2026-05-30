import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

function removeCrossoriginPlugin() {
  return {
    name: "remove-crossorigin",
    transformIndexHtml(html) {
      return html.replaceAll(" crossorigin", "");
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [tailwindcss(), react(), removeCrossoriginPlugin()],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
});
