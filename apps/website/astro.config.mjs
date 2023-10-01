import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import tsconfigPaths from 'vite-tsconfig-paths'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  root: '../../',
  output: 'static',
  adapter: vercel(),
  plugins: [
    tsconfigPaths({
      root: "./",
      loose: true,
    })
  ],
  integrations: [
    UnoCSS(),
    sanity({
      projectId: 'mwytgv17',
      useCdn: false,
      dataset: 'production',
      apiVersion: 'v2023-03-07',
      token: `${process.env.ASTRO_VIEWER_AUTH}`
    }),
    react(),
  ],
  server:{
    port: import.meta.env.NODE_ENV !== 'production' ? 3000 : import.meta.env.PORT
  },
  vite: {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    build: {
      minify: process.env.NODE_ENV === 'production' ? 'esbuild' : false
    }
  }
});