import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://wiki-sahaba.github.io",
  base: "/wiki",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
});
