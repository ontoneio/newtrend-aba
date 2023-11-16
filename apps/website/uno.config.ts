// uno.config.ts
import { defineConfig, presetWind } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({ 
        provider: 'bunny',
        fonts: {
          heading: ['ABeeZee'],
          sans: ['DM Sans']
        }
     })
  ],

})