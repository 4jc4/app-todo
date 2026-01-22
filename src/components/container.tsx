import type { VariantProps } from 'class-variance-authority'
import React from 'react'
import { containerVariants } from './variants'

interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements
}

export default function Container({
  as = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size: 'md', className }),
      ...props,
    },
    children,
  )
}
