import React from 'react'

export const Separator = (props: any) => {
  return (
    <div style={{
      'height': `${props.height}`,
      'backgroundColor': 'var(--accent-color)',
      'width': '1px',
    }} />
  )
}
