import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    icon(),
    sanity({
      projectId: "azfpwdmk",
      dataset: "production",
      useCdn: true,
      studioBasePath: "/studio",
    }),
    react(),
  ],

  output: "static",

  vite: {
    optimizeDeps: {
      include: ["lodash/isObject.js"],
    },
  },
});
