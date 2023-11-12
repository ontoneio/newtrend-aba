// uno.config.ts
import { defineConfig, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
  ],
  rules: [
    [/bg-\[url\((.*?)\)\]/, ([_, image]) => { 
      return { 'background-image': `url(${image})`}
    }],
]
})