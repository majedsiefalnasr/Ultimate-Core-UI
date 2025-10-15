import { useOf } from '@storybook/addon-docs/blocks'
import React from 'react'

/**
 * Tries to generate a relative path to the component source file from its story file.
 */
export const LinkToSource: React.FC = () => {
    const storyOf: any = useOf('story')
    const componentDocs = storyOf?.story?.parameters?.docs || ''
    const sourceURL = componentDocs?.component?.source || ''
  

  return (
    <a
      href={sourceURL}
      target='_blank'
      rel='noopener noreferrer'
      style={{
        fontSize: '0.9rem',
        marginLeft: 'auto',
        opacity: 0.8,
      }}>
      View source
    </a>
  )
}
