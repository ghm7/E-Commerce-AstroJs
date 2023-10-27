import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // This enables SSR
  // output: 'server',
  // adapter: nodejs({
  //   mode: 'standalone', // or 'middleware'
  // }),
  site: 'https://ghm7.github.io/',
  // base: '/E-Commerce-AstroJs',
});
