import {Source, useOf} from '@storybook/addon-docs/blocks'
import React from 'react'

/**
 * Displays an import statement for the current component.
 * If `componentName` isn't provided as a prop, try to derive it from Storybook's
 * runtime info (useOf('story')). We look at several common locations where Storybook
 * exposes component or story metadata.
 */
export const ImportInfo: React.FC = () => {
  // If caller provided a name, use it.
  const storyOf: any = useOf('story')

  // Try a few common places to find a component name
  const componentName =
    storyOf?.parameters?.component?.name ||
    storyOf?.component?.name ||
    storyOf?.story?.component?.name ||
    storyOf?.story?.parameters?.component?.name ||
    // Some stories embed the component name in title (e.g. "Components/Button")
    (() => {
      const title =
        storyOf?.title ||
        storyOf?.story?.title ||
        storyOf?.parameters?.title ||
        storyOf?.story?.parameters?.title ||
        null
      if (typeof title === 'string') {
        // Take the last segment after a slash and strip spaces
        const parts = title.split('/').map((s: string) => s.trim())
        return parts[parts.length - 1] || null
      }
      return null
    })() ||
    // Fallback: try to infer from filename like `UButton.stories.ts` -> `UButton`
    (() => {
      const fileName =
        storyOf?.parameters?.fileName || storyOf?.fileName || storyOf?.story?.fileName || null
      if (typeof fileName === 'string') {
        return fileName.replace(/\.stories\.[jt]sx?$/, '')
      }
      return null
    })() ||
    null

  if (!componentName) return null

  const importStatement = `import { ${componentName} } from '@anchor/ui';`

  return (
    <div style={{margin: '1.5rem 0'}}>
      <Source language='typescript' code={importStatement} />
    </div>
  )
}
