import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import SanityConfig from "../../sanity.config"
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import tsconfigPaths from 'vite-tsconfig-paths'
import UnoCSS from 'unocss/astro'
// import { config } from 'dotenv'
// import { expand } from 'dotenv-expand'

// expand(config)

// https://astro.build/config
export default defineConfig({
  root: '../../',
  output: 'hybrid',
  adapter: vercel(),
  plugins: [
    tsconfigPaths({
      root: "./",
      loose: true,
    })
  ],
  integrations: [
    UnoCSS(),
    sanity({...SanityConfig, 
      token: `${process.env.SANITY_STUDIO_AUTH_TOKEN}`
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