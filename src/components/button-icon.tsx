import type { VariantProps } from 'class-variance-authority'
import SpinnerIcon from '../assets/icons/spinner.svg?react'
import Icon from './icon'
import Skeleton from './skeleton'
import { buttonIconIconVariants, buttonIconVariants } from './variants'

interface ButtonIconProps
  extends Omit<React.ComponentProps<'button'>, 'disabled' | 'size'>,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>['svg']
  loading?: boolean
  handling?: boolean
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  loading,
  handling,
  icon,
  ...props
}: ButtonIconProps) {
  const { type = 'button', ...rest } = props

  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: 'none', size, className })}
      />
    )
  }

  return (
    <button
      className={buttonIconVariants({
        className,
        variant,
        size,
        disabled,
        handling,
      })}
      disabled={!!disabled}
      type={type}
      {...rest}
    >
      <Icon
        className={buttonIconIconVariants({ size, variant })}
        animate={handling}
        svg={handling ? SpinnerIcon : icon}
      />
    </button>
  )
}
