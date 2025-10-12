import {setup} from '@storybook/vue3'
import {createVuetify} from 'vuetify'
import 'vuetify/styles'
import '../src/styles/index.scss'

import type {Preview} from '@storybook/vue3-vite'
import Template from './docs/Template.mdx'

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
  parameters: {
    docs: {
      // 👇 Sets a custom template for the docs page
      page: Template,
      // 👇 Enables the table of contents
      toc: {
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
  },
}

export default preview

const vuetify = createVuetify()

setup(app => {
  app.use(vuetify)
})
