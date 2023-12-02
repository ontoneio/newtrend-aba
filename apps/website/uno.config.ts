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
      // ...
      breakpoints: {
        xs:'360px',
        xm:'480px',
        sm:'568px',
        md:'768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1920px',
        xxxl: '2560px',
        x4k: '3840px'
      },
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