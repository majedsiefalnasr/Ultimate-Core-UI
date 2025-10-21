import {setup} from '@storybook/vue3'
import { createVuetify } from 'vuetify'
// Register the full set of Vuetify components and directives so Storybook
// renders VBtn and other components without "Failed to resolve component" errors.
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
// Material Design Icons font (used by Vuetify icon props like 'mdi-information')
import '@mdi/font/css/materialdesignicons.css'
import type {Preview} from '@storybook/vue3-vite'
// import Template from './docs/Template.mdx'
import {Template} from './DocsTemplate'

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template, // use custom template for docs homepage
    },
  },
}

export default preview

const vuetify = createVuetify({
  components,
  directives,
})

setup(app => {
  app.use(vuetify)
})
