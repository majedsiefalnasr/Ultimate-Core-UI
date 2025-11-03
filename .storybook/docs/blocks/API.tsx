import {useOf} from '@storybook/addon-docs/blocks'
import React from 'react'
import ReactMarkdown from 'react-markdown';

import './style/DataTable.scss';

/**
 * API docs block
 * Expects story parameter `api` with shape:
 * {
 *   title: string,
 *   description: string,
 *   Image: string, // image URL or path
 *   data: Array<{ element: Array<{ title: string, link: string }>, description: string }>
 * }
 */
const API: React.FC = () => {
  const storyOf: any = useOf('story')

  const api: any =
    storyOf?.parameters?.api || storyOf?.story?.parameters?.api || null

  if (!api) return null

  const {title = 'API', description = '', data = []} = api

  return (
    <div>
      <h3 style={{marginTop: 0}}>{title}</h3>
      {description ? <ReactMarkdown>{description}</ReactMarkdown> : null}

      {Array.isArray(data) && data.length > 0 ? (
        <table style={{width: '100%'}} className='docblock-argstable sb-unstyled'>
          <thead className='docblock-argstable-head'>
            <tr>
              <th>Component</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className='docblock-argstable-body'>
            {data.map((row: any, idx: number) => (
              <tr key={idx}>
                <td>
                  <a href={row?.element?.link} target='_blank' rel='noreferrer'>{row?.element?.title}</a>
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

export default API;
export { API };
