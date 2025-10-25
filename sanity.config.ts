'use client'
import { defineConfig } from 'sanity'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'sensokart',
  title: 'Sensokart CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sh8xjsoh',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [],
  schema: {
    types: schemaTypes,
  },
})
