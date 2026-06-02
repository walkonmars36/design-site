import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    sanity({
      projectId: "azfpwdmk",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/studio",
    }),
    react(),
  ],

  adapter: node({
    mode: "standalone",
  }),

  output: "server",

  vite: {
    optimizeDeps: {
      include: ["lodash/isObject.js"],
    },
  },
});