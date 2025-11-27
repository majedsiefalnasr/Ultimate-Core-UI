import { setup } from '@storybook/vue3'
import type { Decorator, Preview } from '@storybook/vue3-vite'
import { h, watch } from 'vue'
import { useTheme } from 'vuetify'
import 'vuetify/styles'
import { Template } from './DocsTemplate'

// Import the Ultimate Core UI library with all themes and configurations
import { ULayout, UMain, USheet, UThemeProvider } from '../src/components'
import { createUltimateCoreUI } from '../src/plugins/createUltimateCoreUI'

// Create Ultimate Core UI instance with default themes
const ultimateCoreUI = createUltimateCoreUI({})

setup(app => app.use(ultimateCoreUI))

// Theme switcher decorator
const withVuetifyTheme: Decorator = (story, context) => ({
  setup() {
    const theme = useTheme()

    // Watch for theme changes from the toolbar
    watch(
      () => context.globals.theme,
      (newTheme) => {
        if (newTheme && theme.global.name.value !== newTheme) {
          // Prefer Vuetify API if available, otherwise set directly
          if (typeof theme.change === 'function') theme.change(newTheme)
          else theme.global.name.value = newTheme
        }
      },
      { immediate: true }
    )

    // Wrap story with nested structure
    return () => h(
      UThemeProvider,
      { theme: theme.global.name.value, withBackground: true },
      {
        default: () => h(
          ULayout,
          {},
          {
            default: () => h(
              UMain,
              {},
              {
                default: () => h(
                  USheet,
                  { style: { minHeight: '300px' }, class: 'd-flex align-center justify-center pa-10' },
                  {
                    default: () => h(
                      'div',
                      { class: 'flex-fill w-100' },
                      [h(story(), context.args)]
                    )
                  }
                )
              }
            )
          }
        )
      }
    )
  },
})

const parameters = {
  docs: { page: Template },
  options: {
    storySort: {
      order: [
        'Getting Started',
        ['Introduction'],
        'Styles and Animations',
        'Components',
        [
          'Application',
          'Containment',
          [
            'Bottom Sheets',
            'Buttons',
            'Cards',
            'Chips',
            'Dialogs',
            'Dividers',
            'Expansion Panels',
            'Icon Buttons',
            'Lists',
            'Menu',
            'Sheets',
            'Toolbars',
            'Tooltips',
          ],
          'Navigation',
          [
            'App Bars',
            'Bottom Navigation',
            'Breadcrumbs',
            'Floating Action Buttons',
            'Footers',
            'Hotkeys',
            'Navigation Drawer',
            'Pagination',
            'Speed Dials',
            'Steppers',
            'Vertical Steppers',
            'System Bars',
            'Tabs',
          ],
          'Form inputs & controls',
          [
            'Autocompletes',
            'Checkboxes',
            'Color Inputs',
            'Combobox',
            'Date Inputs',
            'File Inputs',
            'File Upload',
            'Forms',
            'Inputs',
            'Mask Input',
            'Number Inputs',
            'Otp Input',
            'Radio buttons',
            'Radio buttons group',
            'Range Sliders',
            'Ratings',
            'Selects',
            'Sliders',
            'Switches',
            'Text Fields',
            'Textareas',
          ],
          'Data & Display',
          [
            'Confirm Edit',
            'Data Iterators',
            'Data Tables',
            'Infinite Scrolls',
            'Parallax',
            'Pie Chart',
            'Slide Groups',
            'Sparklines',
            'Tables',
            'Treeview',
            'Video',
            'Virtual scrollers',
          ],
          // 'Grids',
          // [''],
          'Selection',
          [
            'Button Toggles',
            'Carousels',
            'Chip Groups',
            'Item Groups',
            'Windows',
          ],
          'Feedback',
          [
            'Alerts',
            'Badges',
            'Banners',
            'Empty States',
            'Hover',
            'Overlays',
            'Progress Circular',
            'Progress Linear',
            'Skeleton loaders',
            'Snackbars',
            'Snackbar Queue',
            'Timelines',
          ],
          'Images & Icons',
          [
            'Avatars',
            'Icons',
            'Images',
          ],
          'Pickers',
          ['Color Pickers', 'Date Pickers', 'Time Pickers'],
          'Providers',
          ['Default Providers', 'Theme Providers'],
          'Miscellaneous',
          ['Lazy'],
        ],
        'Utilities',
        ['Pull To Refresh'],
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
  // include parameters in the default export so Storybook reliably picks them up
  parameters,
}

export default preview
