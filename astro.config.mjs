import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, passthroughImageService } from 'astro/config'; // 1. Adicionamos o passthroughImageService aqui em cima

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  image: {
      service: passthroughImageService(), // 2. Essa linha desliga o motor de otimização (Sharp)
  },

  adapter: cloudflare(),
});