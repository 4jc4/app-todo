import type { VariantProps } from 'class-variance-authority'
import SpinnerIcon from '../assets/icons/spinner.svg?react'
import Icon from './icon'
import Text from './text'
import { btnIconVariants, btnTextVariants, btnVariants } from './variants'

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof btnVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg']
  handling?: boolean
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  handling,
  icon,
  ...props
}: ButtonProps) {
  const { type = 'button', ...rest } = props

  return (
    <button
      className={btnVariants({
        className,
        disabled,
        size,
        variant,
        handling,
      })}
      disabled={!!disabled}
      type={type}
      {...rest}
    >
      {icon && (
        <Icon
          svg={handling ? SpinnerIcon : icon}
          animate={handling}
          className={btnIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={btnTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
