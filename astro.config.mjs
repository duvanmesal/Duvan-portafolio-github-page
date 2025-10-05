import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // ✅ Agregar esta línea

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://github.com/duvanmesal.io",
  base: 'Duvan-portafolio-github-page'
});
