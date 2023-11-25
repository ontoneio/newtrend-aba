// uno.config.ts
import {
    defineConfig,
    // presetAttributify,
    presetIcons,
    presetTypography,
    // presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  import presetWind from '@unocss/preset-wind'
  
  export default defineConfig({
    shortcuts: [
      // ...
    ],
    theme: {
      colors: {
        // ...
      }
    },
    presets: [
        //   presetUno(),
        //   presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
        presetWind(),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })