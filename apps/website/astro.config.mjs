import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import tsconfigPaths from 'vite-tsconfig-paths'
import UnoCSS from 'unocss/astro'
// import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
// import WindiCSS from 'vite-plugin-windicss'

// https://astro.build/config
export default defineConfig({
  root: '../../',
  site: `${process.env.SITE_URL}`,
  output: 'static',
  adapter: vercel(),
  plugins: [
    tsconfigPaths({
      root: "./",
      loose: true,
    })
  ],
  integrations: [
    react(),
    // tailwind(),
    sanity({
      projectId: 'mwytgv17',
      useCdn: false,
      dataset: 'production',
      apiVersion: 'v2023-03-07',
      token: `${process.env.ASTRO_VIEWER_AUTH}`
    }),
    astroImageTools,
    UnoCSS({
      // injectReset: true
    })
  ],
  image: {
    domains: ["cdn.sanity.io"],
  },
  server:{
    port: process.env.NODE_ENV !== 'production' ? 3000 : process.env.PORT
  },
  vite: {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    build: {
      minify: process.env.NODE_ENV === 'production' ? 'esbuild' : false
    },
    plugins: []
  }
});