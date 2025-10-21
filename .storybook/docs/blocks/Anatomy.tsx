import {useOf} from '@storybook/addon-docs/blocks'
import React from 'react'

/**
 * Anatomy docs block
 * Expects story parameter `anatomy` with shape:
 * {
 *   title: string,
 *   description: string,
 *   Image: string, // image URL or path
 *   data: Array<{ element: string, description: string }>
 * }
 */
export const Anatomy: React.FC = () => {
  const storyOf: any = useOf('story')

  const anatomy: any =
    storyOf?.parameters?.anatomy || storyOf?.story?.parameters?.anatomy || null

  if (!anatomy) return null

  const {title = 'Anatomy', description = '', Image = '', data = []} = anatomy

  return (
    <div
      style={{
        background: '#ffffff',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginTop: '1.5rem',
        fontSize: '0.95rem',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
      }}>
      <h3 style={{marginTop: 0}}>{title}</h3>
      {description ? <p>{description}</p> : null}

      {Image ? (
        <div style={{margin: '1rem 0'}}>
          <img src={Image} alt={`${title} illustration`} style={{maxWidth: '100%'}} />
        </div>
      ) : null}

      {Array.isArray(data) && data.length > 0 ? (
        <table style={{width: '100%', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{textAlign: 'left', borderBottom: '1px solid #e6e6e6'}}>
              <th style={{padding: '0.5rem'}}>Element / Area</th>
              <th style={{padding: '0.5rem'}}>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row: any, idx: number) => (
              <tr key={idx} style={{borderBottom: '1px solid #f2f2f2'}}>
                <td style={{padding: '0.5rem', verticalAlign: 'top', width: '35%'}}>
                  <code>{row.element}</code>
                </td>
                <td style={{padding: '0.5rem'}}>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  )
}
