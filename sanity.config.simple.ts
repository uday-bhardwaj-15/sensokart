import { defineConfig } from 'sanity'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'sensokart',
  title: 'Sensokart CMS',
  projectId: 'your-project-id',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
})
