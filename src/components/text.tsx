import type { VariantProps } from 'class-variance-authority'
import { createElement, type ReactNode } from 'react'
import { textVariants } from './variants'

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children?: ReactNode
}

export default function Text({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return createElement(
    as,
    { className: textVariants({ variant, className }), ...props },
    children,
  )
}
