import { setup } from '@storybook/vue3'
import type { Decorator, Preview } from '@storybook/vue3-vite'
import { h, watch } from 'vue'
import { useTheme } from 'vuetify'
import 'vuetify/styles'
import { Template } from './DocsTemplate'

// Import the Ultimate Core UI library with all themes and configurations
import { UContainer } from '../src/components/UGrid'
import { UThemeProvider } from '../src/components/UThemeProvider'
import { createUltimateCoreUI } from '../src/plugins/createUltimateCoreUI'

// Create Ultimate Core UI instance with default themes
const ultimateCoreUI = createUltimateCoreUI({})

setup(app => app.use(ultimateCoreUI))

// Theme switcher decorator
const withVuetifyTheme: Decorator = (story, context) => {
  const theme = useTheme()
  
  // Watch for theme changes from the toolbar
  watch(
    () => context.globals.theme,
    (newTheme) => {
      if (newTheme && theme.global.name.value !== newTheme) {
        theme.change(newTheme)
      }
    },
    { immediate: true }
  )
  
  // Wrap story: UContainer > UThemeProvider > story content
  return () => h(
    UThemeProvider, 
    { class: 'pa-10', theme: theme.global.name.value, withBackground: true }, 
    {
      default: () => h(story(), context.args)
    }
  )
}

export const parameters = {
  docs: {page: Template},
  options: {
    storySort: {
      order: [
        'Introduction',
        'Getting Started',
        'Styles and Animations',
        'Components',
        [
          'Application',
          'Containment',
          [''],
          'Navigation',
          ['App Bars'],
          'Form inputs & controls',
          ['Autocompletes'],
          'Data & display',
          [''],
          'Grids',
          [''],
          'Selection',
          [''],
          'Feedback',
          ['Alerts'],
          'Images & Icons',
          [''],
          'Pickers',
          [''],
          'Providers',
          [''],
          'Miscellaneous',
          [''],
        ],
        'Directives',
          [''],
        'Resources',
          [''],
        'Changelog',
      ],
    },
  },
}

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [withVuetifyTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
          { value: 'lightColorblind', icon: 'accessibility', title: 'Light (Colorblind)' },
          { value: 'darkColorblind', icon: 'accessibility', title: 'Dark (Colorblind)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  // you may keep other top-level preview settings here if needed
}

export default preview
