import {useOf} from '@storybook/addon-docs/blocks'
import React from 'react'

/**
 * Displays information about the underlying Bootstrap component.
 * Tries to infer the Bootstrap component name from story metadata. You may
 * override detection by setting `parameters.bootstrapComponent` in the story.
 */
export const BootstrapComponent: React.FC = () => {
  const storyOf: any = useOf('story')

  // Respect explicit override if provided in story parameters
  const bootstrapComponentName: string | null =
    storyOf?.parameters?.bootstrapComponent ||
    storyOf?.story?.parameters?.bootstrapComponent ||
    null

  if (!bootstrapComponentName) {
    return null
  }

  // Build a docs slug — many Bootstrap-Vue docs use lowercase component names without the B prefix
  const slug = bootstrapComponentName.toLowerCase()

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
        This component uses <code>{bootstrapComponentName}</code> under the hood.
      </p>
      <p>
        You can find the Bootstrap-Vue docs below. Please note that the docs may reference
        components/directives with the <code>b-</code> prefix.
      </p>
      <a
        href={`https://bootstrap-vue.org/docs/components/${slug}`}
        target='_blank'
        rel='noopener noreferrer'>
        Open Bootstrap-Vue Docs →
      </a>
    </div>
  )
}
