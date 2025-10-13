import {
  Controls,
  Description,
  Primary,
  Source,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks'
import React from 'react'

// 🧩 Import your custom blocks
import { BootstrapComponent } from './docs/blocks/BootstrapComponent'
import { ImportInfo } from './docs/blocks/ImportInfo'
import { LinkToSource } from './docs/blocks/LinkToSource'
import { VuetifyComponent } from './docs/blocks/VuetifyComponent'

/**
 * Custom Docs Page for Ultimate Core UI
 * Combines Storybook default docs blocks with custom Ultimate Core UI ones.
 */
export const Template: React.FC = () => {
  return (
    <div style={{padding: '2rem', maxWidth: 960, margin: '0 auto'}}>
      {/* Header Section */}
      <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
        <Title />
        <LinkToSource />
      </div>

      <Subtitle />
      <Description />

      {/* Import Info */}
      <ImportInfo />

      {/* Bootstrap / Vuetify info blocks (conditionally shown) */}
      <BootstrapComponent />
      <VuetifyComponent />

      {/* Primary story preview */}
      <Primary />

      {/* Controls / Args */}
      <Controls />

      {/* Source Code */}
      <Source />

      {/* Other Stories */}
      <Stories includePrimary={false} title='More Examples' />
    </div>
  )
}
