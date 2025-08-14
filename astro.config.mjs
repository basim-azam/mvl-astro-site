import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://github.com/basim-azam/mvl-astro-site',
  output: 'static'
});
