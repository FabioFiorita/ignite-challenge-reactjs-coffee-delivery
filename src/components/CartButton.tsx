import { ShoppingCart } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const cartButton = tv({
  base: ['rounded p-2'],
  variants: {
    variant: {
      primary: 'text-base-card bg-purple-dark hover:bg-purple-200',
      secondary: 'bg-yellow-light text-yellow-dark  hover:bg-yellow-200',
    },
  },
})

export type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof cartButton>

export function CartButton({ variant, ...props }: CartButtonProps) {
  return (
    <button {...props} className={cartButton({ variant })}>
      <ShoppingCart size={22} weight="fill" />
    </button>
  )
}
