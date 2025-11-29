import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://duvanmesal.github.io",
  base: 'Duvan-portafolio-github-page'
});
