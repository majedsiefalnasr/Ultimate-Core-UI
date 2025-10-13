import {useOf} from '@storybook/addon-docs/blocks'
import React from 'react'

/**
 * Displays information about the underlying Vuetify component.
 * Tries to infer the Vuetify component name from story metadata. You may
 * override detection by setting `parameters.VuetifyComponent` in the story.
 */
export const VuetifyComponent: React.FC = () => {
  const storyOf: any = useOf('story')

  // Respect explicit override if provided in story parameters
  const VuetifyComponentName: string | null =
    storyOf?.parameters?.VuetifyComponent || storyOf?.story?.parameters?.VuetifyComponent || null

  if (!VuetifyComponentName) {
    return null
  }

  // Build a docs slug — many Vuetify docs use lowercase component names without the V prefix
  const slug = VuetifyComponentName.toLowerCase()

  return (
    <div
      style={{
        background: '#f8f9fa',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginTop: '1.5rem',
        fontSize: '0.95rem',
      }}>
      <p>
        This component uses <code>{VuetifyComponentName}</code> under the hood.
      </p>
      <p>
        You can find the Vuetify docs below. Please note that the docs may reference
        components/directives with the <code>v-</code> prefix.
      </p>
      <a
        href={`https://vuetifyjs.com/en/components/${slug}`}
        target='_blank'
        rel='noopener noreferrer'>
        Open Vuetify Docs →
      </a>
    </div>
  )
}
