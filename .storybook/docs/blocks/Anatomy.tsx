import { useOf } from '@storybook/addon-docs/blocks';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import './style/DataTable.scss';

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
const Anatomy: React.FC = () => {
  const storyOf: any = useOf('story')

  const anatomy: any =
    storyOf?.parameters?.anatomy || storyOf?.story?.parameters?.anatomy || null

  if (!anatomy) return null

  const {title = 'Anatomy', description = '', Image = '', data = []} = anatomy

  return (
    <div>
      <h3 style={{marginTop: 0}}>{title}</h3>
      {description ? <ReactMarkdown>{description}</ReactMarkdown> : null}

      {Image ? (
        <div style={{margin: '1rem 0'}}>
          <img src={Image} alt={`${title} illustration`} style={{maxWidth: '100%'}} />
        </div>
      ) : null}

      {Array.isArray(data) && data.length > 0 ? (
        <table style={{width: '100%'}} className='docblock-argstable sb-unstyled'>
          <thead className='docblock-argstable-head'>
            <tr>
              <th>Element / Area</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className='docblock-argstable-body'>
            {data.map((row: any, idx: number) => (
              <tr key={idx}>
                <td>
                  <code>{row.element}</code>
                </td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  )
}

export default Anatomy;
export { Anatomy };
