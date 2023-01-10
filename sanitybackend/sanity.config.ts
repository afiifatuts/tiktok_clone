import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity_backend',

  projectId: 'n2e7i6r7',
  dataset: 'sanity_backend',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
