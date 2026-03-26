import * as React from 'react'

export type BoxProps = React.HTMLAttributes<HTMLDivElement>

export function Box({ children, style, ...rest }: BoxProps) {
  return (
    <div
      {...rest}
      style={{
        padding: 16,
        border: '1px solid #d9d9d9',
        borderRadius: 12,
        background: '#ffffff',
        ...style
      }}
    >
      {children}
    </div>
  )
}