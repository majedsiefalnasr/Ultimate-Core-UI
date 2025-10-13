import type {StorybookConfig} from '@storybook/vue3-vite'

const config: StorybookConfig = {
  // include component stories (js/ts), MDX stories, and docs-only MDX pages
  stories: ['./docs/**/*.@(mdx)', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-a11y'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    defaultName: 'Docs', // default name for the docs tab
    docsMode: false, // whether to render stories in docs tab by default
    autodocs: true, // automatically generate docs from component metadata
  } as any,
}

export default config
