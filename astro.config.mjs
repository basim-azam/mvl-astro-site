import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://basim-azam.github.io/mvl-astro-site',
  base: '/mvl-astro-site',     // <-- this is REQUIRED for project pages
  output: 'static'
});
