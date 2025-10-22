import React from 'react'
import {
  Primary,
  Controls,
  Source,
  useOf,
} from '@storybook/addon-docs/blocks'

/**
 * StoryHeader docs block
 * Renders story title and description (from story parameters) and includes
 * the Primary preview, Controls and Source blocks.
 */
export const StoryHeader: React.FC = () => {
  const storyOf: any = useOf('story')

  const storyHeader: any =
    storyOf?.parameters?.Primary || storyOf?.story?.parameters?.Primary || null

  if (!storyHeader) return null

  const {title = 'Usage', description = '',} = storyHeader

  return (
    <div style={{margin: '1.5rem 0'}}>
      {title ? <h3 style={{margin: '0 0 0.5rem 0'}}>{title}</h3> : null}
      {description ? <p>{description}</p> : null}

      {/* Primary story preview */}
      <Primary />

      {/* Controls / Args */}
      <Controls />

      {/* Source Code */}
      <Source />
    </div>
  )
}
