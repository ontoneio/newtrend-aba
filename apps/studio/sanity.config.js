import { defineConfig } from 'sanity'
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { schemaTypes } from './schemas'
import { singletonTypes, singletonActions } from '../website/src/utils/singleton'

export default defineConfig({
      name: 'newtrend-aba',
      title: 'New Trend ABA',
      projectId: 'mwytgv17',
      useCdn: true,
      dataset: 'production',
      apiVersion: 'v2023-03-07',
      plugins: [deskTool(), visionTool(), vercelDeployTool()],
      schema: {
        types: schemaTypes,
        templates: (templates) =>
          templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
      },
      document: {
        // For singleton types, filter out actions that are not explicitly included
        // in the `singletonActions` list defined above
        actions: (input, context) =>
          singletonTypes.has(context.schemaType)
            ? input.filter(({ action }) => action && singletonActions.has(action))
            : input,
      },
})