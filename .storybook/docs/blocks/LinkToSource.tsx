import { useOf } from '@storybook/addon-docs/blocks'
import path from 'path-browserify'
import React from 'react'

/**
 * Tries to generate a relative path to the component source file from its story file.
 */
export const LinkToSource: React.FC = () => {
  // useOf can return different shapes depending on Storybook version and addons.
  // Read it defensively and try a few known fields where story file path/name may live.
  const storyOf: any = useOf('story')

  // Helpful debug during local testing (comment out in production)
  // console.debug('LinkToSource - useOf("story") ->', storyOf)

  const storyPath =
    storyOf?.storyPath ||
    storyOf?.story?.parameters?.fileName ||
    storyOf?.parameters?.fileName ||
    storyOf?.story?.fileName ||
    storyOf?.fileName ||
    null

  if (!storyPath) return null

  // Remove Storybook story filename suffix like `.stories.ts`, `.stories.tsx`, `.stories.js`, etc.
  const base = storyPath.replace(/\.stories\.[jt]sx?$/, '')

  // Prefer .vue source, then TypeScript, then JavaScript
  const candidates = [`${base}.vue`, `${base}.ts`, `${base}.js`] as const

  // Pick the first candidate that "exists". We can't check the filesystem in the browser
  // so assume .vue if the project is Vue-based; otherwise fall back to ts/js. This heuristic
  // is more robust than always choosing the first string.
  const srcPath = candidates.find(Boolean) || candidates[0]
  const fileName = path.basename(srcPath)

  return (
    <a
      href={`https://github.com/your-org/ultimate-core-ui/blob/main/${srcPath}`}
      target='_blank'
      rel='noopener noreferrer'
      style={{
        fontSize: '0.9rem',
        marginLeft: 'auto',
        opacity: 0.8,
      }}>
      View source ({fileName})
    </a>
  )
}
