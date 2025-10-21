import { Source, useOf } from '@storybook/addon-docs/blocks'
import React from 'react'

/**
 * Displays an import statement for the current component.
 */
export const ImportInfo: React.FC = () => {
  const storyOf: any = useOf('story')
  const componentDocs = storyOf?.story?.parameters?.docs || ''
  const importStatement = componentDocs?.import

  return (
    <div style={{margin: '1.5rem 0'}}>
      <Source language='typescript' code={importStatement} />
    </div>
  )
}
