import type { VariantProps } from 'class-variance-authority'
import Icon from './icon'
import Text from './text'
import { btnIconVariants, btnTextVariants, btnVariants } from './variants'

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof btnVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg']
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={btnVariants({ className, disabled, size, variant })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={btnIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={btnTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
