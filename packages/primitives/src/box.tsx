import * as React from 'react'

type SpaceToken =
  | '0'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'

type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

type BackgroundToken =
  | 'surface-primary'
  | 'surface-canvas'

type BorderToken =
  | 'border-default'
  | 'action-primary'

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  padding?: SpaceToken
  radius?: RadiusToken
  background?: BackgroundToken
  borderColor?: BorderToken
}

function tokenVar(token: string) {
  return `var(--theme-color-${token})`
}

function spaceVar(token: SpaceToken) {
  return `var(--space-${token})`
}

function radiusVar(token: RadiusToken) {
  return `var(--radius-${token})`
}

export function Box({
  children,
  style,
  padding = '400',
  radius = 'md',
  background = 'surface-primary',
  borderColor,
  ...rest
}: BoxProps) {
  return (
    <div
      {...rest}
      style={{
        padding: spaceVar(padding),
        borderRadius: radiusVar(radius),
        background: tokenVar(background),
        ...(borderColor
          ? { border: `1px solid ${tokenVar(borderColor)}` }
          : {}),
        ...style
      }}
    >
      {children}
    </div>
  )
}