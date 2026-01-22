import type { VariantProps } from 'class-variance-authority'
import Icon from './icon'
import { buttonIconIconVariants, buttonIconVariants } from './variants'

interface ButtonIconProps
  extends Omit<React.ComponentProps<'button'>, 'disabled' | 'size'>,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>['svg']
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ className, variant, size, disabled })}
      {...props}
    >
      <Icon className={buttonIconIconVariants({ size, variant })} svg={icon} />
    </button>
  )
}
