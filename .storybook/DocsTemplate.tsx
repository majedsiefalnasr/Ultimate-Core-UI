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
import { BootstrapComponent, ImportInfo, LinkToSource, VuetifyComponent, API , Anatomy, StoryHeader } from './docs/blocks'

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

      {/* Story header (title + description) plus Primary preview, Controls and Source */}
      <StoryHeader />

      {/* API / component structure */}
      <API />

      {/* Anatomy / component structure */}
      <Anatomy />

      {/* Other Stories */}
      <Stories includePrimary={false} title='More Examples' />
    </div>
  )
}
