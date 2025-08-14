import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://<your-username>.github.io/mvl-astro-site',
  output: 'static'
});
