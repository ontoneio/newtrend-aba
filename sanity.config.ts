// import { defineConfig } from 'sanity'
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from './apps/website/src/assets/schemas'
import { singletonTypes, singletonActions } from './apps/website/src/utils/singleton'

export default {
      name: 'newtrend-aba',
      title: 'New Trend ABA',
      projectId: 'mwytgv17',
      useCdn: true,
      dataset: 'production',
      studioBasePath: '/admin',
      apiVersion: 'v2023-03-07',
      plugins: [deskTool(), visionTool()],
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
}