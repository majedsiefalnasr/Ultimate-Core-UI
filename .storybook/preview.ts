import {setup} from '@storybook/vue3'
import {createVuetify} from 'vuetify'
import 'vuetify/styles'
// Material Design Icons font (used by Vuetify icon props like 'mdi-information')
import '@mdi/font/css/materialdesignicons.css'
import '../src/styles/index.scss'

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

const vuetify = createVuetify()

setup(app => {
  app.use(vuetify)
})
