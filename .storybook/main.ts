import type {StorybookConfig} from '@storybook/vue3-vite'
import postcss from 'postcss'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          // use ESM import instead of CommonJS require
          implementation: postcss,
        },
      },
    },
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
    docsMode: false,
    autodocs: true,
  } as any,
}

export default config
