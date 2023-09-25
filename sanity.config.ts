// import { defineConfig } from 'sanity'
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from './apps/website/src/assets/schemas'

export default {
      name: 'kj-wedding',
      title: 'K&J Wedding Operations',
      projectId: 'bf5yp66d',
      useCdn: true,
      dataset: import.meta.env.NODE_ENV !== 'production' ? 'develop' :  'production',
      studioBasePath: '/admin',
      apiVersion: 'v2023-03-07',
      plugins: [deskTool(), visionTool()],
      schema: {
        types: schemaTypes,
      },
}