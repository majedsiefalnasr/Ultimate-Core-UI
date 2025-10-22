import {useOf} from '@storybook/addon-docs/blocks'
import React from 'react'

/**
 * Displays information about the underlying Vuetify component.
 * Tries to infer the Vuetify component name from story metadata. You may
 * override detection by setting `parameters.VuetifyComponent` in the story.
 */
const VuetifyComponent: React.FC = () => {
  const storyOf: any = useOf('story')

  // Respect explicit override if provided in story parameters
  const Vuetify: string | null =
    storyOf?.parameters?.Vuetify || storyOf?.story?.parameters?.Vuetify || null

  if (!Vuetify) {
    return null
  }

  const component = Vuetify?.component || ''
  const content = Vuetify?.content || ''
  const link = Vuetify?.link || ''

  return (
    <div
      style={{
        background: '#f8f9fa',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginTop: '1.5rem',
        fontSize: '0.95rem',
      }}>
      <p>{content}</p>
      <a
        href={`${link}`}
        target='_blank'
        rel='noopener noreferrer'>
        Open Vuetify {component} Docs →
      </a>
    </div>
  )
}

export default VuetifyComponent;
export { VuetifyComponent };
