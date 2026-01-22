import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        none: '',
        primary: 'bg-green-light',
        secondary: 'bg-pink-light',
      },
      size: {
        sm: 'py-0.5 px-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  },
)

export const badgeTextVariants = cva('', {
  variants: {
    variant: {
      none: '',
      primary: 'text-green-dark',
      secondary: 'text-pink-dark',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const badgeSkeletonVariants = cva('', {
  variants: {
    size: {
      sm: 'w-6 h-6',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export const buttonIconVariants = cva(
  `
  inline-flex items-center justify-center cursor-pointer transition group
`,
  {
    variants: {
      variant: {
        none: '',
        primary: 'bg-green-base hover:bg-green-dark',
        secondary: 'bg-gray-200 hover:bg-pink-base',
        tertiary: 'bg-transparent hover:bg-gray-200',
      },
      size: {
        sm: 'w-6 h-6 p-1 rounded',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
      disabled: false,
    },
  },
)

export const buttonIconIconVariants = cva('transition', {
  variants: {
    variant: {
      none: '',
      primary: 'fill-white',
      secondary: 'fill-pink-base group-hover:fill-white',
      tertiary: 'fill-gray-300 group-hover:fill-gray-400',
    },
    size: {
      sm: 'w-4 h-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})

export const iconVariants = cva('', {
  variants: {
    animate: {
      true: 'animate-spin',
      false: '',
    },
  },
  defaultVariants: {
    animate: false,
  },
})

export const textVariants = cva('font-sans text-gray-400', {
  variants: {
    variant: {
      'body-sm-bold': 'text-sm leading-5 font-semibold',
      'body-md': 'text-base leading-6 font-normal',
      'body-md-bold': 'text-bold leading-6 font-semibold',
    },
  },
  defaultVariants: {
    variant: 'body-md',
  },
})

export const btnVariants = cva(
  `
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
  `,
  {
    variants: {
      variant: {
        primary: 'bg-gray-200 hover:bg-pink-light',
      },
      size: {
        md: 'h-14 py-4 px-5',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  },
)

export const btnIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-pink-base',
    },
    size: {
      md: 'w-5 h-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const btnTextVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-gray-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const inputTextVariants = cva(
  `
    border-b border-solid border-gray-200 focus:border-pink-base
    bg-transparent outline-none
  `,
  {
    variants: {
      size: {
        md: 'pb-2 px-2',
      },
      disabled: {
        true: 'pointer-events-none',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  },
)

export const inputCheckboxWrapperVariants = cva(`
    inline-flex items-center justify-center relative group
  `)

export const inputCheckboxVariants = cva(
  `
  appearance-none peer flex items-center justify-center cursor-pointer
  transition overflow-hidden
`,
  {
    variants: {
      variant: {
        none: '',
        default: `
        border-2 border-solid border-green-base
      hover:border-green-dark hover:bg-green-dark/20
      checked:border-green-base checked:bg-green-base
      group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
        `,
      },
      size: {
        md: 'w-5 h-5 rounded-sm',
      },
      disabled: {
        true: 'pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      disabled: false,
    },
  },
)

export const inputCheckboxIconVariants = cva(
  `
    absolute top-1/2 left-1 -translate-y-1/2
    hidden peer-checked:block fill-white
  `,
  {
    variants: {
      size: {
        md: 'w-3 h-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export const cardVariants = cva(
  `
    rounded-lg border border-solid border-gray-200
    bg-white shadow-sm
  `,
  {
    variants: {
      size: {
        none: '',
        md: 'p-5',
      },
    },
    defaultVariants: {
      size: 'none',
    },
  },
)

export const containerVariants = cva('mx-auto', {
  variants: {
    size: {
      md: 'max-w-126 px-2',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const skeletonVariants = cva(
  `
    animate-pulse bg-gray-200 pointer-events-none
  `,
  {
    variants: {
      rounded: {
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      rounded: 'lg',
    },
  },
)
