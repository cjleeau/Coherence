import * as React from 'react'

type TextElement = 'p' | 'span' | 'strong' | 'label'

type TextTone = 'primary' | 'secondary' | 'inverse'

type TextSize = '100' | '200' | '300' | '400' | '500' | '600'

type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold'

type TextLeading = '100' | '200' | '300'

export type TextProps = {
  as?: TextElement
  tone?: TextTone
  size?: TextSize
  weight?: TextWeight
  leading?: TextLeading
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

function textColorVar(tone: TextTone) {
  return `var(--theme-color-text-${tone})`
}

function fontSizeVar(size: TextSize) {
  return `var(--font-size-${size})`
}

function fontWeightVar(weight: TextWeight) {
  return `var(--font-weight-${weight})`
}

function lineHeightVar(leading: TextLeading) {
  return `var(--font-line-height-${leading})`
}

export function Text({
  as = 'p',
  tone = 'primary',
  size = '300',
  weight = 'regular',
  leading = '300',
  children,
  style,
  ...rest
}: TextProps) {
  const Component = as

  return (
    <Component
      {...rest}
      style={{
        margin: 0,
        color: textColorVar(tone),
        fontFamily: 'var(--font-family-sans)',
        fontSize: fontSizeVar(size),
        fontWeight: fontWeightVar(weight),
        lineHeight: lineHeightVar(leading),
        ...style
      }}
    >
      {children}
    </Component>
  )
}