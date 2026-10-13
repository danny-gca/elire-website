// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages : site de projet servi sous /elire-website/.
export default defineConfig({
  site: 'https://danny-gca.github.io',
  base: '/elire-website',
  trailingSlash: 'ignore',
});
